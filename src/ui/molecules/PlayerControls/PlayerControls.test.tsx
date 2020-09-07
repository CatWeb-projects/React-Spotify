import React from 'react';
import { render } from '@testing-library/react';
import { PlayerControls } from './PlayerControls';

it('render button correct', () => {
  const controls = () => {
    render(<PlayerControls />);
  };
  expect(controls).toMatchSnapshot();
});
