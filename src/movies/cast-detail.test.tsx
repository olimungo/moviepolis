import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import { CastDetail } from '.';
import cast from './cast-movie-641.test.json';
import tmdb from '../services/tmdb.json';

const server = setupServer();

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test('It should retrieve a cast of 3 members and populate the DOM', async () => {
    const movieId = 641;

    server.use(
        rest.get(
            'https://api.themoviedb.org/3/movie/:id/credits',
            (req, res, ctx) => {
                return res(ctx.status(200), ctx.json(cast));
            }
        )
    );

    render(<CastDetail id={movieId} />);

    const lis = await screen.findAllByTestId('li');
    expect(lis.length).toEqual(cast.cast.length);
});

test('It should call the get cast service with the API token', async () => {
    const movieId = 641;
    let key = '';

    server.use(
        rest.get(
            'https://api.themoviedb.org/3/movie/:id/credits',
            (req, res, ctx) => {
                key = req.url.searchParams.get('api_key') || '';

                return res(ctx.status(200), ctx.json(cast));
            }
        )
    );

    render(<CastDetail id={movieId} />);

    const lis = await screen.findAllByTestId('li');
    expect(lis.length).toEqual(cast.cast.length);
    expect(key).toEqual(tmdb.key);
});
