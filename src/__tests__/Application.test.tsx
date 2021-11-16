import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../Application';

it('Should render welcome page', () => {
    render(<App />);
    expect(screen.getByTestId('counter-view')).toBeDefined();
})  