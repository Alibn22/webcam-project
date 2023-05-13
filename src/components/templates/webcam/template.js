import Webcam from '../../molecules/webcam/webcam'
import Pereview from '../../molecules/pereview/pereview'

const Template = (props) => {

    return (
        <div className='templateContainer'>
            {!props.capturing?
            <Webcam button={props.button[0]} webcam={props.webcam} />:
            <Pereview perview={props.pereview} upload={props.upload} percent={props.percent} button={props.button[1]} videoSize={props.videoSize} />
            }
        </div>
    )
}

export default  Template