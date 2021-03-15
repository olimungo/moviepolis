import { render, screen, fireEvent } from '@testing-library/react';
import { AppFooter } from './';

test('It should contain an icon', () => {
    render(<AppFooter />);

    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
});

test('It should open a new window and go to https://github.com/olimungo/moviepolis when clicked', () => {
    render(<AppFooter />);

    const icon = screen.getByTestId('icon');
    const mockedOpen = jest.fn();
    global.open = jest.fn();
    const originalOpen = window.open;
    window.open = mockedOpen;
    let url = '';

    mockedOpen.mockImplementation((result) => {
        url = result;
    });

    fireEvent.click(icon);
    expect(mockedOpen).toBeCalled();
    expect(url).toEqual('https://github.com/olimungo/moviepolis');

    window.open = originalOpen;
});