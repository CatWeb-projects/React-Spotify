import React from 'react';
import { render } from '@testing-library/react';
import { ProgressBar } from './ProgressBar';

it('render button correct', () => {
  const progressBar = () => {
    render(<ProgressBar />);
  };
  expect(progressBar).toMatchSnapshot();
});
