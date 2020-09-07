import React from 'react';
import { AudioList } from './AudioList';
import { ProviderContext } from 'Context/Context';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Organisms/AudioList',
  component: AudioList
};

export const regular = () => {
  return (
    <ProviderContext>
      <MemoryRouter>
        <AudioList />
      </MemoryRouter>
    </ProviderContext>
  );
};
