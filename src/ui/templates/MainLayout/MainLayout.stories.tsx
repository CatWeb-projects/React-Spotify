import React from 'react';
import { MainLayout } from 'ui/templates/MainLayout/MainLayout';

export default {
  title: 'MainLayout',
  component: MainLayout
};

export const regular = ({ children }: any): React.ReactElement => (
  <MainLayout>{children}</MainLayout>
);
