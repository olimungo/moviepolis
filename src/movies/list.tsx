import './list.css';
import * as React from 'react';
import { useLocation } from "react-router-dom";
import { searchMovies } from '../services'

export type Movie = {
    id: number,
    poster_path: string,
    original_title: string,
    overview: string
}

export type Props = { onMovieSelected: Function };

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function List(props: Props) {
    const search = useQuery().get('search');
    const { onMovieSelected } = props;
    const [moviesList, setMoviesList] = React.useState<Movie[]>([]);

    React.useEffect(() => {
        if (search) {
            const storageSearch = window.localStorage.getItem('search') || '';

            if (storageSearch === search) {
                const storageMoviesList = window.localStorage.getItem('moviesList') || null;

                if (storageMoviesList) {
                    setMoviesList(JSON.parse(storageMoviesList));
                }
            } else {
                searchMovies(search).then((results: Movie[]) => {
                    setMoviesList(results);
                    window.localStorage.setItem('moviesList', JSON.stringify(results));
                    window.localStorage.setItem('search', search);
                    window.scrollTo(0, 0);
                });
            }
        }
    }, [search]);

    const renderMovie = (movie: Movie) => {
        return (
            <li key={movie.id} onClick={() => onMovieSelected(movie.id)}>
                {
                    movie.poster_path
                        ? <img className="image" src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="" />
                        : <div className="fake-image"></div>
                }

                <div className="title-container">
                    <span className="title" title={movie.original_title}>{movie.original_title}</span>
                </div>

                <div className="overview">{movie.overview}</div>
            </li>
        );
    }

    return (
        <div className='movies-list'>
            <ul>
                {moviesList.map((movie: Movie) => renderMovie(movie))}
            </ul>
        </div>
    );
}