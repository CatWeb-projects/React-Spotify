import React from 'react';
import { render } from '@testing-library/react';
import { SongProfile } from './SongProfile';

it('render button correct', () => {
  const profile = () => {
    render(<SongProfile />);
  };
  expect(profile).toMatchSnapshot();
});
