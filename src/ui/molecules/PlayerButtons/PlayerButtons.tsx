import React from 'react';
import { PrevButton } from 'ui/atoms/PrevButton/PrevButton';
import { PlayButton } from 'ui/atoms/PlayButton/PlayButton';
import { NextButton } from 'ui/atoms/NextButton/NextButton';

export const PlayerButtons = () => {
  return (
    <div className="player-buttons">
      <PrevButton />
      <PlayButton />
      <NextButton />
    </div>
  );
};
