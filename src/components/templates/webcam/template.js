import Webcam from '../../molecules/webcam/webcam'
import Pereview from '../../molecules/pereview/pereview'

const Template = (props) => {

    return (
        <div style={{width:'100%',minHeight:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            {!props.capturing?
            <Webcam button={props.button[0]} webcam={props.webcam} />:
            <Pereview perview={props.pereview} upload={props.upload} percent={props.percent} button={props.button[1]} videoSize={props.videoSize} />
            }
        </div>
    )
}

export default  Template