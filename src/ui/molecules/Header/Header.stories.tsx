import React from 'react';
import { Header } from 'ui/molecules/Header/Header';

export default {
  title: 'Header',
  component: Header
};

export const regular = ({ children }: any): React.ReactElement => (
  <Header>{children}</Header>
);
