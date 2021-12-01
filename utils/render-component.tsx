import { render } from '@testing-library/react';
import { theme } from '../styles';
import { ThemeProvider } from 'styled-components';
import type { NextPage } from 'next';

export const renderComponent = (Component: NextPage) =>
  render(
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>,
  );
