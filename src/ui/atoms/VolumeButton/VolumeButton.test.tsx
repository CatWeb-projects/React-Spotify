import React from 'react';
import { render } from '@testing-library/react';
import { VolumeButton } from './VolumeButton';

it('render button correct', () => {
  const volumeButton = () => {
    render(<VolumeButton />);
  };
  expect(volumeButton).toMatchSnapshot();
});
