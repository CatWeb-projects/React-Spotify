import React, { useContext, useEffect, useCallback } from 'react';
import { Context, list } from 'Context/Context';

export const PrevButton = () => {
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

  const prevSong = useCallback(
    (e: { preventDefault: () => void }) => {
      let keys: any = Object.keys(files);
      e.preventDefault();
      if (counter === 0 && profile === true) {
        setCounter((count: number) => count);
        setAudioFiles(files[keys[counter]]);
        setPlaying(false);
      } else if (counter === 0) {
        setCounter(files.length - 1);
        setAudioFiles(files[keys[files.length - 1]]);
      } else {
        setCounter((count: number) => count - 1);
        setAudioFiles(files[keys[counter - 1]]);
        setPlaying(true);
      }
    },
    // eslint-disable-next-line
    [files, counter, audioFiles, playing]
  );

  return (
    <div className="prev-button">
      <button onClick={prevSong}>
        <svg
          className="svg-icon svg-icon-prev"
          focusable="false"
          height="1em"
          width="1em"
          viewBox="0 0 12 12"
          aria-hidden="true"
        >
          <path d="M2 5.397V.5a.5.5 0 1 0-1 0v11a.5.5 0 1 0 1 0V6.597L11 12V0L2 5.397z"></path>
        </svg>
      </button>
    </div>
  );
};
