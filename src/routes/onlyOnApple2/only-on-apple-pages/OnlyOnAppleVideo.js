import React, { useState } from 'react'
import './OnlyOnAppleVideo.css';
import ReactPlayer from 'react-player'
function OnlyOnAppleVideo({ info_data }) {
  const { title_text,
    btn_text_firs, btn_text, icon_play, icon_play_pause, icons_video_banner, smile_text, play_full, string, video } = info_data;
  const [playing, setplaying] = useState(true)
  return (
    <>
      <div className='wrapper_only_on_apple_video'  >
        <ReactPlayer   url={video} className="video_player" />
        <div className="wrapper_only_on_apple_page_text">
          <div className="only_text">
            <span>{icons_video_banner}</span>
            <span>{smile_text}</span>
            <button className='only_btn_video' >Bundle width One</button>
          </div>
          <div className="only_text2">
            <p>{title_text}</p>
            <div className="only_on_btn_btn">
              <button className='only_btn_video  only_btn_video_one ' >{btn_text_firs}</button>
              <button className='only_btn_video  only_btn_video_two ' >Learn more</button>
            </div>
          </div>
          <div className="only_text">
            <span>{string}</span>
          </div>
        </div>
        <div className='btn_sticy_only_on_apple'  >{icon_play} </div>
      </div>
    </>
  )
}

export default OnlyOnAppleVideo