import Webcam from '../../molecules/webcam/webcam'


const Template = (props) => {

    return (
        <div style={{width:'100%',minHeight:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Webcam button={props.button} webcam={props.webcam} />
        </div>
    )
}

return Template