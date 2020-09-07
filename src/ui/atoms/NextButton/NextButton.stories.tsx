import React from 'react';
import { NextButton } from './NextButton';
import { ProviderContext } from 'Context/Context';

export default {
  title: 'Atoms/NextButton',
  component: NextButton
};

export const regular = () => {
  return (
    <ProviderContext>
      <NextButton />
    </ProviderContext>
  );
};
