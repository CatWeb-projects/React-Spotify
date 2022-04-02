import React, { useContext, useEffect, useCallback } from 'react';
import { Context, list } from 'Context/Context';

export const NextButton = () => {
  const {
    setPlaying,
    counter,
    setCounter,
    audioFiles,
    setAudioFiles,
    files,
    setFiles,
    playing,
    profile
  } = useContext(Context);

  useEffect(() => {
    setFiles(list.map((item) => item.src));
    // eslint-disable-next-line
  }, []);

  const nextSong = useCallback(
    (e: { preventDefault: () => void }) => {
      let keys: any = Object.keys(files);
      e.preventDefault();
      if (counter === 0 && profile === true) {
        setCounter((count: number) => count);
        setAudioFiles(files[keys[counter]]);
        setPlaying(false);
      } else if (counter === files.length - 1) {
        setCounter(0);
        setAudioFiles(files[keys[0]]);
      } else {
        setCounter((count: number) => count + 1);
        setAudioFiles(files[keys[counter + 1]]);
        setPlaying(true);
      }
    },
    // eslint-disable-next-line
    [files, counter, audioFiles, playing, setAudioFiles, setCounter, setPlaying]
  );

  return (
    <div className="next-button">
      <button onClick={nextSong}>
        <svg
          className="svg-icon svg-icon-next"
          focusable="false"
          height="1em"
          width="1em"
          viewBox="0 0 12 12"
          aria-hidden="true"
        >
          <path
            d="M11 .5v11c0 .276-.232.5-.5.5a.503.503 0 0 1-.5-.5V7.08L1.562 11.95A.375.375 0 0 
          1 1 11.624V.376c0-.29.312-.47.562-.325L10 4.919V.5c0-.276.232-.5.5-.5.276 0 .5.229.5.5z"
          ></path>
        </svg>
      </button>
    </div>
  );
};
