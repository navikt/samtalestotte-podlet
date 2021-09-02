import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders tittel til podlet', () => {
    render(<App prodDomener={['localhost']} visning={'PANEL_MED_IKON_OG_TEKST'} />);
    const linkElement = screen.getByText(/Forbered samtale med medarbeider!/i);
    expect(linkElement).toBeInTheDocument();
});
test('Lenke tekst rendres som forventet', () => {
    render(<App prodDomener={['localhost']} visning={'SNAKKEBOBLE'} />);
    const linkElement = screen.getByText(/Gå til samtalestøtten/i);
    expect(linkElement).toBeInTheDocument();
});
