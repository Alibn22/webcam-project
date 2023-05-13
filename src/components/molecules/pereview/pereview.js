import PerviewComponent from '../../atoms/pereview/pereview'
import Button from '../../atoms/button/button'
import ProgressBar from '../../atoms/progressBar/progressBar'

const Webcam = ({perview,button1,button2,videoSize,upload,percent}) => {

    return (
        <div className='container' >
            <PerviewComponent src={perview.src} />
            <span className='size'>حجم : {videoSize} مگابایت</span>
            {!upload?
                <>
                    <Button name={button1.name} title={button1.title}  {...button1}/>
                    <Button name={button2.name} title={button2.title}  {...button2}/>
                </>:
                <ProgressBar completed={percent}/>
            }
        </div>
    )
}


export default Webcam
