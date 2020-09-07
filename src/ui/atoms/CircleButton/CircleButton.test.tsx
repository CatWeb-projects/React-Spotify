import React from 'react';
import { render } from '@testing-library/react';
import { CircleButton } from './CircleButton';

it('render button correct', () => {
  const button = () => {
    render(<CircleButton />);
  };
  expect(button).toMatchSnapshot();
});
