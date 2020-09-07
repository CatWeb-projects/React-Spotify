import React from 'react';
import { Header } from './Header';
import { ProviderContext } from 'Context/Context';

export default {
  title: 'Molecules/Header',
  component: Header
};

export const regular = () => {
  return (
    <ProviderContext>
      <Header />
    </ProviderContext>
  );
};
