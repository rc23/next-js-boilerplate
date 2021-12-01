import { renderComponent } from '../utils';
import { screen } from '@testing-library/react';
import Home from '../pages/index';

test('renders a heading', () => {
  renderComponent(Home);

  const link = screen.getByRole('link', {
    name: 'About',
  });

  expect(link).toBeInTheDocument();
});
