import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';

it('render button correct', () => {
  const header = () => {
    render(<Header />);
  };
  expect(header).toMatchSnapshot();
});
