import React from 'react';
import { SongProfile } from './SongProfile';
import { ProviderContext } from 'Context/Context';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Organisms/SongProfile',
  component: SongProfile
};

export const regular = () => {
  return (
    <ProviderContext>
      <MemoryRouter>
        <SongProfile />
      </MemoryRouter>
    </ProviderContext>
  );
};
