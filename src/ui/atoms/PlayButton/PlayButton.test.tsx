import React from 'react';
import { render } from '@testing-library/react';
import { PlayButton } from './PlayButton';

it('render button correct', () => {
  const button = () => {
    render(<PlayButton />);
  };
  expect(button).toMatchSnapshot();
});
