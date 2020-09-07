import React from 'react';
import { render } from '@testing-library/react';
import { RepeatButton } from './RepeatButton';

it('render button correct', () => {
  const button = () => {
    render(<RepeatButton />);
  };
  expect(button).toMatchSnapshot();
});
