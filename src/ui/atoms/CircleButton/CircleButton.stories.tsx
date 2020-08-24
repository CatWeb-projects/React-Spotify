import React from 'react';
import { CircleButton } from './CircleButton';

export default {
  title: 'CircleButton',
  component: CircleButton
};

export const regular = ({ children }: any): React.ReactElement => (
  <CircleButton>{children}</CircleButton>
);
