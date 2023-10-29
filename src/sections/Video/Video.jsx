import React, { useState, useRef } from "react";
import { RiPlayMiniFill, RiPauseMiniFill } from "react-icons/ri";
import images from "../../data/images";
import "./Video.css";

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  return (
    <div className="video section-padding-y">
      <div className="video-container">
        <video
          ref={vidRef}
          src={images.video}
          typeof="video/mp4"
          loop
          poster={images.poster}
          muted></video>

        {playVideo ? (
          <div
            className="video-overlay-pause"
            onClick={() => {
              setPlayVideo(!playVideo);
              if (playVideo) {
                vidRef.current.pause();
              } else {
                vidRef.current.play();
              }
            }}>
            <RiPauseMiniFill className="video-icon" />
          </div>
        ) : (
          <div
            className="video-overlay-play"
            onClick={() => {
              setPlayVideo(!playVideo);
              if (playVideo) {
                vidRef.current.pause();
              } else {
                vidRef.current.play();
              }
            }}>
            <RiPlayMiniFill className="video-icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Video;
