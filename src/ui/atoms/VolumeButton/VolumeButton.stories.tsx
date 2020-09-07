import React from 'react';
import { VolumeButton } from './VolumeButton';
import { ProviderContext } from 'Context/Context';

export default {
  title: 'Atoms/VolumeButton',
  component: VolumeButton
};

export const regular = () => {
  return (
    <ProviderContext>
      <VolumeButton />
    </ProviderContext>
  );
};
