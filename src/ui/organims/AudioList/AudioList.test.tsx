import React from 'react';
import { render } from '@testing-library/react';
import { AudioList } from './AudioList';

it('render button correct', () => {
  const list = () => {
    render(<AudioList />);
  };
  expect(list).toMatchSnapshot();
});
