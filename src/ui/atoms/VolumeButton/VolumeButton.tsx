import React, { useState, useContext } from 'react';
import ReactTooltip from 'react-tooltip';
import { Context } from 'Context/Context';
import { VolumeBar } from '../VolumeBar/VolumeBar';

export const VolumeButton = () => {
  const [active, setActive] = useState<boolean>(false);
  const { volume, setVolume } = useContext(Context);
  const { currentVolume, setCurrentVolume } = useContext(Context);
  const changes = () => {
    setActive(!active);
    if (!active) {
      setCurrentVolume(volume);
      setVolume(0.0);
    } else {
      setVolume(currentVolume);
    }
  };
  return (
    <div className="volume-option">
      <button
        data-tip=""
        data-for="volume"
        onClick={changes}
        className="volume-button"
      >
        <svg
          className="svg-icon svg-icon-volume"
          focusable="false"
          height="1em"
          width="1em"
          viewBox="0 0 12 12"
          aria-hidden="true"
        >
          <path d="M3 4.5H.5v3H3l2.5 2v-7z"></path>
          <path
            fill="none"
            d="M9 2.5c2 1.933 2 5.067 0 7m-1.5-5c.976.829.976 2.171 0 3"
          ></path>
        </svg>
      </button>
      <ReactTooltip
        id="volume"
        overridePosition={() => ({ left: 617, top: 2 })}
        backgroundColor={'white'}
        className="volume_tooltip"
        clickable={true}
        scrollHide={false}
      >
        <VolumeBar active={active} />
      </ReactTooltip>
    </div>
  );
};
