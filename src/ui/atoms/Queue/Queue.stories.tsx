import React from 'react';
import { Queue } from './Queue';
import { ProviderContext } from 'Context/Context';

export default {
  title: 'Atoms/Queue',
  component: Queue
};

export const regular = () => {
  return (
    <ProviderContext>
      <Queue />
    </ProviderContext>
  );
};
