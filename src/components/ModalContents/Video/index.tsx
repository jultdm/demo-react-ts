import { useAppContext } from "../../../contexts";

const Video = () => {

    const { state } = useAppContext();

    let video;

    if (state.catering === 'commercial'){
        video = "https://www.youtube.com/embed/dQw4w9WgXcQ";
    }else{
        video = "https://www.youtube.com/embed/dQw4w9WgXcQ";
    }

    return (
        <div className='video'>
            <iframe src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
    );
};

export default Video;


