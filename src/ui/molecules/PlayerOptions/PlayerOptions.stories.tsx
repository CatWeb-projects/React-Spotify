import React from 'react';
import { PlayerOptions } from './PlayerOptions';
import { ProviderContext } from 'Context/Context';

export default {
  title: 'Molecules/PlayerOptions',
  component: PlayerOptions
};

export const regular = () => {
  return (
    <ProviderContext>
      <PlayerOptions />
    </ProviderContext>
  );
};
