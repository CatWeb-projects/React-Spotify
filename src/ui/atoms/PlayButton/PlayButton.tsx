import React, { useContext, useEffect, useCallback } from 'react';
import { Context } from 'Context/Context';

export const PlayButton = () => {
  const { playing, setPlaying, active, setActive, audioFiles } =
    useContext(Context);

  const changes = useCallback(() => {
    if (audioFiles) {
      setActive(!active);
    } else {
      return;
    }
    if (active) {
      setPlaying(true);
    } else {
      setPlaying(false);
    }
    // eslint-disable-next-line
  }, [audioFiles, active, playing]);

  useEffect(() => {
    if (playing) {
      setActive(false);
    } else {
      setActive(true);
    }
    // eslint-disable-next-line
  }, [playing]);
  return (
    <div className="play-button">
      {active ? (
        <button onClick={changes}>
          <svg
            className="svg-icon svg-icon-play"
            focusable="false"
            height="1em"
            width="1em"
            viewBox="0 0 12 12"
            aria-hidden="true"
          >
            <path d="M2.5.5v11l9-5.5z"></path>
          </svg>
        </button>
      ) : (
        <button onClick={changes}>
          <svg
            className="svg-icon svg-icon-pause"
            focusable="false"
            height="1em"
            width="1em"
            viewBox="0 0 12 12"
            aria-hidden="true"
          >
            <path
              d="M2.495 0h2.01C4.778 0 5 .224 5 .5v11a.5.5 0 0 
            1-.495.5h-2.01A.498.498 0 0 1 2 11.5V.5a.5.5 0 0 1 .495-.5zM7 .5a.5.5 0 0 
            1 .495-.5h2.01c.273 0 .495.224.495.5v11a.5.5 0 0 1-.495.5h-2.01A.498.498 0 
            0 1 7 11.5V.5z"
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
};
