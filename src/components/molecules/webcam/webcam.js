import WebcamComponent from '../../atoms/webcam/webcam'
import Button from '../../atoms/button/button'

const Webcam = ({webcam,button}) => {

    return (
        <div className='container' >
            <WebcamComponent audio={webcam.audio} webcamref={webcam.ref} />
            <Button name={button.name} title={button.title}  {...button}/>
        </div>
    )
}


export default Webcam
