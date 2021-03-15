import { render, screen } from '@testing-library/react';
import { Quote } from './';

test('It should contain a container for the quote', () => {
    render(<Quote />);

    const container = screen.getByTestId('container');
    expect(container).toBeInTheDocument();
    expect(container.innerHTML).not.toEqual('');
});