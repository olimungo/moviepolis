import tmdb from './tmdb.json';

export function searchMovies(queryString: string) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${tmdb.key}&language=en-US&query=${queryString}&page=1&include_adult=false`)
        .then((value: Response) => value.json())
        .then((value: any) => value.results);
}

export function getMovie(movieId: string) {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${tmdb.key}&language=en-US`)
        .then((value: Response) => value.json());
}