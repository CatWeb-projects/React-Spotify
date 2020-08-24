import React from 'react';
import { ResumeButton } from 'ui/atoms/ResumeButton/ResumeButton';

export default {
  title: 'ResumeButton',
  component: ResumeButton
};

export const regular = ({ children }: any): React.ReactElement => (
  <ResumeButton>{children}</ResumeButton>
);
