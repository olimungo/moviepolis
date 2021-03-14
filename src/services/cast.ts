import tmdb from './tmdb.json';

export function getCast(id: number) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${tmdb.key}&language=en-US`)
        .then((value: Response) => value.json())
        .then((value: any) => value.cast);
}