import { render, screen, fireEvent } from '@testing-library/react';
import { AppHeader } from './';

test('It should contain an icon', () => {
    render(<AppHeader onSearch={() => null} />);

    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
});

test('It should have Moviepolis as brand', () => {
    render(<AppHeader onSearch={() => null} />);

    const brand = screen.getByTestId('brand');
    expect(brand.innerHTML).toEqual('Moviepolis');
});

test('It should contain an input tag', () => {
    render(<AppHeader onSearch={() => null} />);

    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('type', 'text');
});

test('It should contain a submit button', () => {
    render(<AppHeader onSearch={() => null} />);

    const submit = screen.getByTestId('submit');
    expect(submit).toBeInTheDocument();
});

test('It should callback onSearch when Submit button is clicked', () => {
    const handleSearch = jest.fn()
    render(<AppHeader onSearch={handleSearch} />);

    const input = screen.getByTestId('input');
    const submit = screen.getByTestId('submit');
    const textEntry = 'Requiem for a dream';
    let queryString = '';

    handleSearch.mockImplementation((result) => {
        queryString = result;
    });

    fireEvent.change(input, { target: { value: textEntry } });
    fireEvent.click(submit);
    expect(handleSearch).toHaveBeenCalledTimes(1);
    expect(queryString).toEqual(textEntry);
});