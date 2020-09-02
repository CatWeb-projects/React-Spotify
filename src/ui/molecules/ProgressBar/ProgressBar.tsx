import React, { useRef, useEffect, useContext, useState } from 'react';
import { Context } from 'Context/Context';
import ReactTooltip from 'react-tooltip';
import 'ui/molecules/ProgressBar/ProgressBar.scss';

export const ProgressBar = () => {
  const {
    list,
    currentTime,
    setCurrentTime,
    durationTime,
    setDurationTime,
    volume,
    playing,
    clickedTime,
    setClickedTime
  } = useContext<any>(Context);
  const [barTooltip, setBarTooltip] = useState<number>(0);
  const [trackLink, setTrackLink] = useState<any>([]);

  const audio: any = useRef(null);
  useEffect(() => {
    const current: any = audio.current;
    const audioSrc = current.innerHTML;
    current.ontimeupdate = () => {
      let seconds = current.currentTime;
      setCurrentTime(seconds.toFixed());
    };
    current.onloadedmetadata = () => {
      let allTime = current.duration;
      setDurationTime(allTime.toFixed());
    };
    current.volume = volume;
    playing ? current.play() : current.pause();
    if (barTooltip < 0) {
      setBarTooltip(0);
    }
    if (clickedTime && clickedTime !== currentTime) {
      current.currentTime = clickedTime;
      setClickedTime(0);
    }
  }, [currentTime, volume, playing, barTooltip, clickedTime]);

  //Drag pointer of the player
  const calcClickedTime = (e: { pageX: number }) => {
    const clickPositionInPage = e.pageX;
    const bar: any = document.querySelector('.bar-wrapper__progress');
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = durationTime / barWidth;
    const result = timePerPixel * clickPositionInBar;
    return result.toFixed();
  };
  const onTimeUpdate = (time: any) => setClickedTime(time);
  const handleTimeDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.persist();
    onTimeUpdate(calcClickedTime(e));
    const onMove = (eMove: { pageX: number }) =>
      onTimeUpdate(calcClickedTime(eMove));
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', onMove);
    });
  };

  const formatSecondsAsTime = (seconds: number) => {
    let hr = Math.floor(seconds / 3600);
    let min = Math.floor((seconds - hr * 3600) / 60);
    let sec = Math.floor(seconds - hr * 3600 - min * 60);

    if (min < 10) {
      min = 0 + min;
    }
    if (sec < 10) {
      sec = 0 + sec;
    }
    // eslint-disable-next-line
    return min < 10 && sec < 10 ? min + ':' + '0' + sec : min + ':' + sec;
  };
  const curPercentage = (currentTime / durationTime) * 100;

  //Get Time of the player pointer
  const barTooltipLine = (time: any) => setBarTooltip(time);
  const getTooltipTime = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.persist();
    const onMoveTooltip = (eMove: { pageX: number }) =>
      barTooltipLine(calcClickedTime(eMove));
    document.addEventListener('mousemove', onMoveTooltip);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', onMoveTooltip);
    });
  };

  useEffect(() => {
    for (let track of list) {
      setTrackLink(track.src);
      console.log(track.src);
    }
    console.log(trackLink);
  }, [list, trackLink]);

  return (
    <div className="progress-bar">
      <audio id="audio" ref={audio} preload="metadata" src={trackLink}>
        {/* {list
          ? list.map((item: any) => <source key={item.track} src={item.src} />)
          : ''} */}
      </audio>
      {/* <audio id="audio" ref={audio} preload="metadata">
        <source src={list ? list.map((item: any) => console.log(item)) : ''} />
      </audio> */}
      <div className="song-text">
        <span className="song-artist">ALABAMA</span>•
        <span className="song-name">Kyok</span>
      </div>
      <div className="bar-wrapper">
        <span className="current-Time">{formatSecondsAsTime(currentTime)}</span>
        <div
          data-tip=""
          data-for="bar-wrapper__time"
          className="bar-wrapper__progress"
          style={{
            background: `linear-gradient(to right, #6fd44a ${curPercentage}%, grey 0)`
          }}
          onMouseDown={(e) => handleTimeDrag(e)}
          onMouseMove={(e) => getTooltipTime(e)}
        >
          <span
            className="bar-wrapper__knob"
            style={{ left: `${curPercentage - 1}%` }}
          />
          <ReactTooltip id="bar-wrapper__time">
            {formatSecondsAsTime(barTooltip)}
          </ReactTooltip>
        </div>
        <span className="total-time">{formatSecondsAsTime(durationTime)}</span>
      </div>
    </div>
  );
};
