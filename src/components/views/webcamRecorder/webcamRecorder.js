import Webcam from '../../templates/webcam/template'
import React from 'react'

const WebcamRecorder = () => {
    const webcamRef = React.useRef(null);
    const mediaRecorderRef = React.useRef(null);
    const [capturing, setCapturing] = React.useState(false);
    const [recordedChunks, setRecordedChunks] = React.useState([]);

    const handleDataAvailable = React.useCallback(
        ({ data }) => {
            if (data.size > 0) {
                setRecordedChunks((prev) => prev.concat(data));
            }
        },
        [setRecordedChunks]
    );

    const handleStartCaptureClick = React.useCallback(() => {
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
    }, [webcamRef, setCapturing, mediaRecorderRef,handleDataAvailable]);

    const handleDownload = React.useCallback(() => {
        if (recordedChunks.length) {
            const blob = new Blob(recordedChunks, {
                type: "video/webm"
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = url;
            a.download = "react-webcam-stream-capture.webm";
            a.click();
            window.URL.revokeObjectURL(url);
            setRecordedChunks([]);
        }
    }, [recordedChunks]);

    return (
        <>
            <Webcam webcam={{audio:true,ref:webcamRef}} button={
                {name:'ضبط',title:'ضبط',handler:()=>handleStartCaptureClick(),disabled:capturing}
            } />
            
            {recordedChunks.length > 0 && (
                <button onClick={handleDownload}>Download</button>
            )}
        </>
    );
}


export default WebcamRecorder