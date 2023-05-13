

const Webcam = (props) => {


    return (
        < video controls class="video" autoPlay>
            <source src={props.src} id="video_here" {...props} />
        </video>
    )
}

export default Webcam;