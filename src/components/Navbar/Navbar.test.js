import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';
import '@testing-library/jest-dom';
import { within } from '@testing-library/react';
describe('Navbar component', () => {
    test('renders without crashing', () => {
        render(_jsx(MemoryRouter, { children: _jsx(Navbar, {}) }));
    });
    test('shows the logo image', () => {
        const { container } = render(_jsx(MemoryRouter, { children: _jsx(Navbar, {}) }));
        // we only have one <img>, so we grab it and verify its src
        const img = container.querySelector('img');
        expect(img).toBeInTheDocument();
        expect(img?.getAttribute('src')).toBe('mocked-file');
    });
    test('renders all top‐level links in the overlay', () => {
        const { container } = render(_jsx(MemoryRouter, { children: _jsx(Navbar, {}) }));
        // the overlay menu has 5 list items
        const overlay = container.querySelector('.nav-overlay');
        const items = within(overlay).getAllByRole('link');
        expect(items).toHaveLength(5);
    });
    test('overlay menu is closed by default and toggles open/close when hamburger clicked', async () => {
        const user = userEvent.setup();
        const { container } = render(_jsx(MemoryRouter, { children: _jsx(Navbar, {}) }));
        const overlay = container.querySelector('.nav-overlay');
        expect(overlay).toHaveClass('close');
        // clicking the hamburger (first button in the DOM)
        const [hamburgerBtn] = container.querySelectorAll('button');
        await user.click(hamburgerBtn);
        expect(overlay).toHaveClass('open');
        // clicking again to close
        await user.click(hamburgerBtn);
        expect(overlay).toHaveClass('close');
    });
    test('highlights the active NavLink based on route', () => {
        render(_jsx(MemoryRouter, { initialEntries: ['/contact'], children: _jsx(Navbar, {}) }));
        const contactLinks = screen.getAllByRole('link', { name: /^contact$/i });
        expect(contactLinks[1]).toBeInTheDocument();
    });
});
