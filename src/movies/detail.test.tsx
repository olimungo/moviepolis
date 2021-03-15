import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { Router, MemoryRouter, BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { MovieDetail } from '.';
import movie from './movie-641.test.json';

const server = setupServer();

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

const renderWithRouter = (ui: any, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route)

    return render(ui, { wrapper: BrowserRouter })
}

test('It should retrieve a movie and populate the DOM', async () => {
    // const movieId = 641;
    // const history = createMemoryHistory();

    // server.use(
    //     rest.get('https://api.themoviedb.org/3/movie/:id', (req, res, ctx) => {
    //         console.log('toto')
    //         return res(
    //             ctx.status(200),
    //             ctx.json({ movie }),
    //         )
    //     }),
    // );

    // history.push(`/movie/${movieId}`);
    // render(<MovieDetail />, { wrapper: MemoryRouter });
    // renderWithRouter(<MovieDetail />, { route: `/movie/${movieId}` });

    // const title = screen.getByTestId('title');
    // expect(title.innerHTML).toEqual(movie.original_title);
});