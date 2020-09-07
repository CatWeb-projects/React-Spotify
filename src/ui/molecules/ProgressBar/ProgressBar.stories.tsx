import React from 'react';
import { ProgressBar } from './ProgressBar';
import { ProviderContext } from 'Context/Context';

export default {
  title: 'Molecules/ProgressBar',
  component: ProgressBar
};

export const regular = () => {
  return (
    <ProviderContext>
      <ProgressBar />
    </ProviderContext>
  );
};
