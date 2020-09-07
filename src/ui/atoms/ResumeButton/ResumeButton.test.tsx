import React from 'react';
import { render } from '@testing-library/react';
import { ResumeButton } from './ResumeButton';

it('render button correct', () => {
  const button = () => {
    render(<ResumeButton />);
  };
  expect(button).toMatchSnapshot();
});
