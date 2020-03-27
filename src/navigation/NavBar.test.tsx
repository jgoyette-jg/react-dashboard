import React from 'react';
import { render } from '@testing-library/react';
import NavBar from './NavBar';

test('it renders the title', () => {
    const { getByText } = render(<NavBar/>);
    const journey = getByText('Journeys');
    expect(journey).toBeInTheDocument();
})
