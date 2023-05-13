import PerviewComponent from '../../atoms/pereview/pereview'
import Button from '../../atoms/button/button'

const Webcam = ({perview,button}) => {

    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            <PerviewComponent src={perview.src} />
            <Button name={button.name} title={button.title}  {...button}/>
        </div>
    )
}


export default Webcam
