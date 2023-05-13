import Webcam from '../../molecules/webcam/webcam'
import Pereview from '../../molecules/pereview/pereview'

const Template = (props) => {

    return (
        <div className='templateContainer'>
            {!props.capturing?
            <Webcam button={props.button[0]} webcam={props.webcam} />:
            <Pereview perview={props.pereview} upload={props.upload} percent={props.percent} button1={props.button[1]} 
             button2={props.button[2]}
             videoSize={props.videoSize} />
            }
        </div>
    )
}

export default  Template