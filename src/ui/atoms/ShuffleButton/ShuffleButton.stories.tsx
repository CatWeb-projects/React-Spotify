import React from 'react';
import { ShuffleButton } from './ShuffleButton';
import { ProviderContext } from 'Context/Context';

export default {
  title: 'Atoms/ShuffleButton',
  component: ShuffleButton
};

export const regular = () => {
  return (
    <ProviderContext>
      <ShuffleButton />
    </ProviderContext>
  );
};
