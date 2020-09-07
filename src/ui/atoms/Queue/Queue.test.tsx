import React from 'react';
import { render } from '@testing-library/react';
import { Queue } from './Queue';

it('render button correct', () => {
  const queue = () => {
    render(<Queue />);
  };
  expect(queue).toMatchSnapshot();
});
