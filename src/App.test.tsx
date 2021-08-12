import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders tittel til podlet', () => {
  render(<App />);
  const linkElement = screen.getByText(/Forbered samtale med medarbeider!/i);
  expect(linkElement).toBeInTheDocument();
});
test('Lenke tekst rendres som forventet', () => {
  render(<App />);
  const linkElement = screen.getByText(/Gå til samtalestøtten/i);
  expect(linkElement).toBeInTheDocument();
});
