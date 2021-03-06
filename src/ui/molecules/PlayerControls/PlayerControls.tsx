import React from 'react';
import { PrevButton } from 'ui/atoms/PrevButton/PrevButton';
import { PlayButton } from 'ui/atoms/PlayButton/PlayButton';
import { NextButton } from 'ui/atoms/NextButton/NextButton';
import 'ui/molecules/PlayerControls/PlayerControls.scss';

export const PlayerControls = () => {
  return (
    <div className="player-controls">
      <PrevButton />
      <PlayButton />
      <NextButton />
    </div>
  );
};
