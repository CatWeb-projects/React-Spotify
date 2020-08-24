import React from 'react';
import { Header } from 'ui/molecules/Header/Header';
import 'styles.scss';
import { AudioList } from 'ui/molecules/AudioList/AudioList';

export const MainLayout = ({ children }: any) => {
  return (
    <div className="main-container">
      <Header />
      <AudioList />
    </div>
  );
};
