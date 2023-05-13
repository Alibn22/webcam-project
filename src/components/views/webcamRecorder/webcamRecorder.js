import Webcam from '../../templates/webcam/template'
import { useCallback, useRef, useState } from 'react'
import axios from '../../../utils/config/serverConfig'
import { ToastContainer, toast } from 'react-toastify';

const WebcamRecorder = () => {
    const webcamRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const [videoSrc, setVideoSrc] = useState()
    const [videoSize, setVideoSize] = useState()
    const [capturing, setCapturing] = useState(false);
    const [percent, setPercent] = useState(0)
    const [upload, setUpload] = useState(false)
    const [recordedChunks, setRecordedChunks] = useState([]);

    const handleDataAvailable = useCallback(
        ({ data }) => {
            if (data.size > 0) {
                setRecordedChunks((prev) => prev.concat(data));
                const blob = new Blob([data], {
                    type: "video/webm"
                });
                const url = URL.createObjectURL(blob);
                setVideoSrc(url)
                setVideoSize((data.size / 1000000).toFixed(2))
            }
        },
        [setRecordedChunks]
    );

    const handleStartCaptureClick = useCallback(() => {
        setCapturing(true);

        mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
            mimeType: "video/webm"
        });
        mediaRecorderRef.current.addEventListener(
            "dataavailable",
            handleDataAvailable
        );
        mediaRecorderRef.current.start();
        setTimeout(() => {
            mediaRecorderRef.current.stop();
            setCapturing(false);
        }, 20000);
    }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable]);

    const handleUpload = () => {
        const videoFile = new File([videoSrc], 'recorder', { lastModified: new Date() })
        const formData = new FormData();
        formData.append('file', videoFile);
        setUpload(true)
        axios.post('/upload', formData, {
            onUploadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent;
                let percent = Math.floor((loaded * 100) / total)
                setPercent(percent)
            }
        }).then(res => {
            if (res.status === 200) {
                setUpload(false)
                setPercent(0)
                setRecordedChunks([])
                toast.success('ارسال ویدیو با موفقیت انجام شد.', {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "colored",
                });
            }
        }).catch(error => {
            console.log(error)
        }

        )
    }

    return (
        <>
            <Webcam
                webcam={{ audio: true, ref: webcamRef }}
                capturing={recordedChunks.length > 0}
                pereview={{ src: videoSrc }}
                videoSize={videoSize}
                percent={percent}
                upload={upload}
                button={[
                    { name: 'ضبط', title: 'ضبط', onClick: () => handleStartCaptureClick(), disabled: capturing },
                    { name: 'ارسال', title: 'ارسال', onClick: () => handleUpload() }
                ]
                } />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={true}
                closeOnClick
                rtl={true}
                theme="colored"
            />
        </>
    );
}


export default WebcamRecorder