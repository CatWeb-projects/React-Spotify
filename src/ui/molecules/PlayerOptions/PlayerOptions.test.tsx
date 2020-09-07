import React from 'react';
import { render } from '@testing-library/react';
import { PlayerOptions } from './PlayerOptions';

it('render button correct', () => {
  const options = () => {
    render(<PlayerOptions />);
  };
  expect(options).toMatchSnapshot();
});
