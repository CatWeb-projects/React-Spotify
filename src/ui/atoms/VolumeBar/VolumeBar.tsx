import React, { useContext, useRef, useCallback } from 'react';
import { Context } from 'Context/Context';

type active = {
  active: boolean;
};
export const VolumeBar = (props: active) => {
  const { setVolume } = useContext(Context);
  const inputValue = useRef(null);

  const getValue = useCallback(() => {
    const getInput: any = inputValue.current;
    const getClear = Math.floor(getInput.value);
    setVolume(getClear / 10);
  }, [setVolume]);

  return (
    <input
      type="range"
      step="1"
      min="0"
      max="10"
      ref={inputValue}
      onChange={getValue}
      defaultValue={5}
    ></input>
  );
};
