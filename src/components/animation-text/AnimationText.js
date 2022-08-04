import React, { useRef, useState } from 'react';
import './AnimationText.css'
import { FiPlayCircle, FiPauseCircle } from 'react-icons/fi';


function AnimationText() {
    const videoMedia = useRef();
    const [videoPlaying, setVideoPlaying] = useState(true);
    const handlePlayVideo = (e) => {
        videoMedia.current.play()
        setVideoPlaying(true)
        console.log("dsdsd");
    }
    const handlePauseVideo = (e) => {
        videoMedia.current.pause()
        setVideoPlaying(false)
        console.log("dsdsd");
    }
    return (
        <>
            <div className='animation_text' >
                <h1 className="first_title">The best experiences.</h1>
                <h1 className="second_title">Only on Apple.</h1>
                <h4>Get the most out of the devices you love with high‑quality content and services. Award‑winning series and films, amazing music in spatial audio, world-class workouts and meditations, trusted news publications, superfun games —
                    even the ways you pay for things. And they’re only on Apple.</h4>
            </div>
            <div className="onlyonapple_container">
                <div className="appe_mediapps"></div>
                <div className="video_container">
                    <div className="video_info">
                        {videoPlaying === true ? <FiPauseCircle onClick={handlePauseVideo} /> : <FiPlayCircle onClick={handlePlayVideo} />}
                    </div>
                    <video ref={videoMedia} className="video_autoplay" autoPlay muted loop playsInline={true} src="https://www.apple.com/105/media/us/services/2021/8b95cfe0-0534-48a6-8777-91d87ebf7298/anim/hero-sizzle/large.mp4"></video>
                </div>
            </div>
        </>

    )
}

export default AnimationText