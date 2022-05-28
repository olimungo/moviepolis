import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { act, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { MovieDetail } from '.';
import movie from './movie-641.test.json';
import cast from './cast-movie-641.test.json';
import { unmountComponentAtNode } from 'react-dom';
import { json } from 'msw/lib/types/context';

// let container: any = null;

// const server = setupServer(
//     rest.get('https://api.themoviedb.org/3/movie/:id', (req, res, ctx) => {
//         console.log('AAA');
//         return res(ctx.status(200), ctx.json(movie));
//     }),
//     rest.get(
//         'https://api.themoviedb.org/3/movie/:id/credits',
//         (req, res, ctx) => {
//             console.log('BBB');
//             return res(ctx.status(200), ctx.json(cast));
//         }
//     )
// );

// Enable API mocking before tests.
// beforeAll(() => server.listen());

// beforeEach(() => {
//     container = document.createElement('div');
//     document.body.appendChild(container);
// });

// Reset any runtime request handlers we may add during the tests.
// afterEach(() => {
//     server.resetHandlers();
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
// });

// Disable API mocking after the tests are done.
// afterAll(() => server.close());

// test('It should retrieve a movie and populate the DOM', async () => {
//     const spyFetch = jest.spyOn(global, 'fetch');
//     const movieId = movie.id;

//     render(
//         <MemoryRouter initialEntries={[`/movie/${movieId}`]}>
//             <Route exact path="/movie/:id">
//                 <MovieDetail />
//             </Route>
//         </MemoryRouter>,
//         container
//     );

//     await waitFor(() => expect(spyFetch).toHaveBeenCalledTimes(2));

//     const title = screen.getByTestId('title');
//     expect(title.innerHTML).toEqual(movie.original_title);
// });

// test('It should retrieve a movie and populate the DOM 2', async () => {
//     const spyFetch = jest.spyOn(global, 'fetch');
//     const movieId = movie.id;

//     render(
//         <MemoryRouter initialEntries={[`/movie/${movieId}`]}>
//             <Route exact path="/movie/:id">
//                 <MovieDetail />
//             </Route>
//         </MemoryRouter>,
//         container
//     );

// await waitFor(() => expect(spyFetch).toHaveBeenCalledTimes(2));

// const title = screen.getByTestId('title');
// expect(title.innerHTML).toEqual(movie.original_title);
// });

let container: any = null;
beforeEach(() => {
    // met en place un élément DOM comme cible de rendu
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // nettoie en sortie de test
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});
