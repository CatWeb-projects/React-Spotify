import React from 'react';
import { CircleButton } from './CircleButton';

export default {
  title: 'Atoms/CircleButton',
  component: CircleButton
};

export const regular = () => {
  const classType = '';
  const typeCircleButton = '';
  return <CircleButton classType={classType} type={typeCircleButton} />;
};
