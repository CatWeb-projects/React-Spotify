import React from 'react';
import { Queue } from 'ui/atoms/Queue/Queue';
import { VolumeButton } from 'ui/atoms/VolumeButton/VolumeButton';
import 'ui/molecules/PlayerOptions/PlayerOptions.scss';
import { RepeatButton } from 'ui/atoms/RepeatButton/RepeatButton';
import { ShuffleButton } from 'ui/atoms/ShuffleButton/ShuffleButton';

export const PlayerOptions = () => {
  return (
    <div className="player-options">
      <RepeatButton />
      <ShuffleButton />
      <VolumeButton />
      <Queue />
    </div>
  );
};
