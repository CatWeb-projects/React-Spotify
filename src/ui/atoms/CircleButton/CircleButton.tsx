import React, { useState, useContext, useEffect } from 'react';
import { Context } from 'Context/Context';
import 'ui/atoms/CircleButton//CircleButton.scss';

export const CircleButton = (props: any) => {
  const {
    list,
    playing,
    setPlaying,
    setSong,
    setAudioFiles,
    counter,
    setCounter
  } = useContext(Context);
  const [active, setActive] = useState<any>(false);
  const changes = () => {
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
    console.log(counter);
  };
  // useEffect(() => {
  //   if (list === props.src) {
  //     setSong(true);
  //     setActive(true);
  //     console.log('true');
  //   } else {
  //     setSong(false);
  //     setActive(false);
  //   }
  // }, [list]);

  // useEffect(() => {
  //   if (list !== props.src) {
  //     setActive(false);
  //   } else {
  //     setActive(true);
  //   }
  //   if (playing === false) {
  //     setActive(false);
  //   }
  // }, [list]);

  return (
    <div className="circle-button-div">
      <button onClick={changes} className={`circle-button-div__button-`}>
        <svg
          className="svg-icon svg-icon-pause"
          focusable="false"
          height="10"
          width="10"
          viewBox="0 0 12 12"
          aria-hidden="true"
        >
          {active ? (
            <path d="M2.495 0h2.01C4.778 0 5 .224 5 .5v11a.5.5 0 0 1-.495.5h-2.01A.498.498 0 0 1 2 11.5V.5a.5.5 0 0 1 .495-.5zM7 .5a.5.5 0 0 1 .495-.5h2.01c.273 0 .495.224.495.5v11a.5.5 0 0 1-.495.5h-2.01A.498.498 0 0 1 7 11.5V.5z"></path>
          ) : (
            <path d="M2.5.5v11l9-5.5z"></path>
          )}
        </svg>
      </button>
    </div>
  );
};
