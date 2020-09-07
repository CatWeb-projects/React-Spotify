import React from 'react';
import { ResumeButton } from './ResumeButton';
import { ProviderContext } from 'Context/Context';

export default {
  title: 'Atoms/ResumeButton',
  component: ResumeButton
};

export const regular = () => {
  return (
    <ProviderContext>
      <ResumeButton />
    </ProviderContext>
  );
};
