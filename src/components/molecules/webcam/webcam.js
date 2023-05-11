import WebcamComponent from '../../atoms/webcam'
import Button from '../../atoms/button/button'

const Webcam = ({webcam,button}) => {

    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            <WebcamComponent audio={webcam.audio} WebcamRef={webcam.ref} />
            <Button name={button.name} title={button.title} onClick={button.handler}/>
        </div>
    )
}


export default Webcam
