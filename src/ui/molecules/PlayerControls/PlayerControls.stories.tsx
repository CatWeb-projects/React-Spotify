import React from 'react';
import { PlayerControls } from './PlayerControls';
import { ProviderContext } from 'Context/Context';

export default {
  title: 'Molecules/PlayerControls',
  component: PlayerControls
};

export const regular = () => {
  return (
    <ProviderContext>
      <PlayerControls />
    </ProviderContext>
  );
};
