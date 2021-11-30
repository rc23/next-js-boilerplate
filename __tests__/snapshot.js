import Home from '../pages/index';
import React from 'react';
import renderer from 'react-test-renderer';

it('renders homepage unchanged', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
