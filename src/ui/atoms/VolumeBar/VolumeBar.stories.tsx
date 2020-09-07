import React from 'react';
import { VolumeBar } from './VolumeBar';
import { ProviderContext } from 'Context/Context';

export default {
  title: 'Atoms/VolumeBar',
  component: VolumeBar
};

export const regular = () => {
  return (
    <ProviderContext>
      <VolumeBar active />
    </ProviderContext>
  );
};
