import React, { useRef, useEffect, useContext } from 'react';
import { Context } from 'Context/Context';

export const ProgressBar = () => {
  const {
    currentTime,
    setCurrentTime,
    durationTime,
    setDurationTime
  } = useContext<any>(Context);

  const audio: any = useRef(null);
  useEffect(() => {
    const current: any = audio.current;
    console.log(audio);
    current.ontimeupdate = (event: any) => {
      setDurationTime(currentTime);
    };
    // setDurationTime(durInNr);
  }, [currentTime, durationTime]);

  console.log(durationTime);

  const Toggle = () => {
    if (audio.current.paused) {
      audio.current.play();
    }
  };
  return (
    <div className="progress-bar">
      <audio controls id="audio" ref={audio}>
        <source
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          type="audio/mpeg"
        />
      </audio>
      <div className="song-text">
        <span className="song-artist">ALABAMA</span>•
        <span className="song-name">Kyok</span>
      </div>
      <div className="bar-wrapper">
        <span className="current-Time">0:00</span>
        <input
          className="slider-track"
          type="range"
          step="0.1"
          min="0"
          max="30"
        />
        <span className="total_Time">3:00</span>
      </div>
    </div>
  );
};
