import React from 'react';
import { render } from '@testing-library/react';
import { PrevButton } from './PrevButton';

it('render button correct', () => {
  const button = () => {
    render(<PrevButton />);
  };
  expect(button).toMatchSnapshot();
});
