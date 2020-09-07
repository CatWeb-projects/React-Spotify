import React from 'react';
import { render } from '@testing-library/react';
import { VolumeBar } from './VolumeBar';

it('render button correct', () => {
  const volumeBar = () => {
    render(<VolumeBar active />);
  };
  expect(volumeBar).toMatchSnapshot();
});
