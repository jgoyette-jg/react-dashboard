import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

test('it renders the title', () => {
    const { getByText } = render(<Dashboard username="User1" />);
    const title = getByText('Dashboard');
    expect(title).toBeInTheDocument();
})
