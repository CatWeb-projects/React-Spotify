import React from 'react';
import { RepeatButton } from './RepeatButton';
import { ProviderContext } from 'Context/Context';

export default {
  title: 'Atoms/RepeatButton',
  component: RepeatButton
};

export const regular = () => {
  return (
    <ProviderContext>
      <RepeatButton />
    </ProviderContext>
  );
};
