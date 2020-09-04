import React, { useContext, useEffect, useState } from 'react';
import { Context, list } from 'Context/Context';

export const PrevButton = () => {
  const {
    setPlaying,
    counter,
    setCounter,
    setAudioFiles,
    files,
    setFiles
  } = useContext<any>(Context);

  useEffect(() => {
    setFiles(list.map((item: any) => item.src));
  }, []);

  useEffect(() => {
    setFiles(list.map((item: any) => item.src));
  }, []);
  let keys: any = Object.keys(files);
  const prevSong = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (counter === 0) {
      setCounter(files.length - 1);
      setAudioFiles(files[keys[files.length - 1]]);
    } else {
      setCounter((count: number) => count - 1);
      setAudioFiles(files[keys[counter - 1]]);
      setPlaying(true);
    }
  };

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
