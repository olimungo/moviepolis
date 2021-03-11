import './list.css';
import * as React from 'react';

export type Props = { movies: never[] };

export default function List(props: Props) {
    const [moviesList, setMoviesList] = React.useState([]);
    const { movies } = props;

    React.useEffect(() => {
        if (movies) {
            setMoviesList(movies);

            console.log(movies);
        }
    }, [movies]);

    const renderMovie = (movie: any) => {
        return (
            <li key={movie.id}>
                {
                    movie.backdrop_path
                        ? <img className="image" src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path} width="500" alt="" />
                        : <div className="fake-image"></div>
                }

                <label className="title">{movie.original_title}</label>

                <div className="overview">{movie.overview}</div>
            </li>
        );
    }

    return (
        <div className='movies-list'>
            <ul>
                {moviesList.map((movie: any) => renderMovie(movie))}
            </ul>

        </div>
    );
}