import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { MovieDetail } from '.';
import movie from './movie-641.test.json';
import cast from './cast-movie-641.test.json';

import '@testing-library/jest-dom/extend-expect';

const server = setupServer();

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test('It should retrieve a movie and populate the DOM', async () => {
    const spyFetch = jest.spyOn(global, 'fetch');
    const movieId = movie.id;

    server.use(
        rest.get('https://api.themoviedb.org/3/movie/:id', (req, res, ctx) => {
            return res(ctx.status(200), ctx.json(movie));
        })
    );

    server.use(
        rest.get(
            'https://api.themoviedb.org/3/movie/:id/credits',
            (req, res, ctx) => {
                return res(ctx.status(200), ctx.json(cast));
            }
        )
    );

    render(
        <MemoryRouter initialEntries={[`/movie/${movieId}`]}>
            <Route exact path="/movie/:id">
                <MovieDetail />
            </Route>
        </MemoryRouter>
    );

    await waitFor(() => expect(spyFetch).toHaveBeenCalledTimes(2));

    const title = screen.getByTestId('title');
    expect(title.innerHTML).toEqual(movie.original_title);
});
