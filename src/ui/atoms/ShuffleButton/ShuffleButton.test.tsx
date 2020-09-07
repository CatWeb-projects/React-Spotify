import React from 'react';
import { render } from '@testing-library/react';
import { ShuffleButton } from './ShuffleButton';

it('render button correct', () => {
  const button = () => {
    render(<ShuffleButton />);
  };
  expect(button).toMatchSnapshot();
});
