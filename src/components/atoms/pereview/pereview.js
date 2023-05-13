

const Webcam = (props) => {


    return (
        < video controls class="video" autoPlay width={500} high={720}>
            <source src={props.src} id="video_here" {...props} />
        </video>
    )
}

export default Webcam;