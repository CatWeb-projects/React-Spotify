import React, { useState, useContext, useEffect, useCallback } from 'react';
import { Context } from 'Context/Context';
import 'ui/atoms/CircleButton//CircleButton.scss';

export type ButtonProps = {
  type?: string;
  classType?: string;
  src?: string;
  id?: number;
  black?: string;
};

export const CircleButton = (props: ButtonProps) => {
  const {
    counter,
    audioFiles,
    playing,
    setPlaying,
    setAudioFiles,
    setCounter,
    setCurrentSong
  } = useContext(Context);
  const [active, setActive] = useState(false);

  const changes = useCallback(() => {
    setActive(!active);
    if (!active) {
      setAudioFiles(props.src);
      if (props.id) {
        setCounter(props.id);
      }
      setPlaying(true);
    } else {
      setPlaying(false);
    }
    // eslint-disable-next-line
  }, [active, audioFiles, counter, playing]);

  useEffect(() => {
    if (audioFiles === props.src) {
      setCurrentSong(true);
    }
    // eslint-disable-next-line
  }, [audioFiles]);

  useEffect(() => {
    if (audioFiles !== props.src) {
      setActive(false);
    } else {
      setActive(true);
    }
    if (playing === false) {
      setActive(false);
    }
    // eslint-disable-next-line
  }, [audioFiles, playing]);

  return (
    <div className={`circle-button-div `}>
      {active ? (
        <button
          onClick={changes}
          className={`circle-button-div__button circle-button-hover${props.classType} circle-${props.type}`}
        ></button>
      ) : (
        <button
          onClick={changes}
          className={`circle-button-div__button circle-${props.type}`}
        >
          <svg className={`svg_stop`} viewBox="0 0 12 12">
            <path d="M2.5.5v11l9-5.5z"></path>
          </svg>
        </button>
      )}
    </div>
  );
};
