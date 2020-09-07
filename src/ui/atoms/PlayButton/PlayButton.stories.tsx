import React from 'react';
import { PlayButton } from './PlayButton';
import { ProviderContext } from 'Context/Context';

export default {
  title: 'Atoms/PlayButton',
  component: PlayButton
};

export const regular = () => {
  return (
    <ProviderContext>
      <PlayButton />
    </ProviderContext>
  );
};
