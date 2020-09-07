import React from 'react';
import { PrevButton } from './PrevButton';
import { ProviderContext } from 'Context/Context';

export default {
  title: 'Atoms/PrevButton',
  component: PrevButton
};

export const regular = () => {
  return (
    <ProviderContext>
      <PrevButton />
    </ProviderContext>
  );
};
