import Webcams from 'react-webcam'


const Webcam = (props) => {
    const videoConstraints = {
        width: 500,
        height: 720,
        facingMode: "user"
    };

    return (
        <Webcams 
        audio={props.audio} 
        ref={props.webcamref} 
        width={500}
        high={720}
        videoConstraints={videoConstraints}
        {...props}/>
    )
}

export default Webcam;