import PerviewComponent from '../../atoms/pereview/pereview'
import Button from '../../atoms/button/button'
import ProgressBar from '../../atoms/progressBar/progressBar'

const Webcam = ({perview,button,videoSize,upload,percent}) => {

    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            <PerviewComponent src={perview.src} />
            <span style={{marginTop:'20px'}}>حجم : {videoSize} مگابایت</span>
            {!upload?
                <Button name={button.name} title={button.title}  {...button}/>:
                <ProgressBar completed={percent}/>
            }
        </div>
    )
}


export default Webcam
