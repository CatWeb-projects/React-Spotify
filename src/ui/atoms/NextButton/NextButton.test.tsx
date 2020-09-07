import React from 'react';
import { render } from '@testing-library/react';
import { NextButton } from './NextButton';

it('render button correct', () => {
  const button = () => {
    render(<NextButton />);
  };
  expect(button).toMatchSnapshot();
});
