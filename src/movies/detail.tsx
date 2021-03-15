import './detail.css';
import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMovie } from '../services'
import { CastDetail } from '.'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

export type Movie = {
    id: number,
    original_title: string,
    poster_path: string,
    backdrop_path: string,
    original_language: string,
    release_date: string
}

const movieInit: Movie = {
    id: NaN,
    original_title: '',
    poster_path: '',
    backdrop_path: '',
    original_language: '',
    release_date: ''
}

export default function Detail() {
    const history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = React.useState<Movie>(movieInit);
    const [releaseDate, setReleaseDate] = React.useState('');

    React.useEffect(() => {
        if (id) {
            console.log('useEffect')
            getMovie(id).then(results => setMovie(results));
        }
    }, [id]);

    React.useEffect(() => {
        if (movie && movie.release_date) {
            const date = movie.release_date.split('-');
            setReleaseDate(`${date[2]}/${date[1]}/${date[0]}`);
        }
    }, [movie]);

    return (
        <div className="detail">
            <FontAwesomeIcon className="icon-back" icon={faArrowCircleLeft} onClick={() => history.goBack()} />

            <div className="card">
                {
                    movie.backdrop_path
                        ? <img className="image" src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path} alt="" />
                        : <div className="fake-image"></div>
                }

                <div className="detail-info">
                    <div data-testid="title" className="title">{movie.original_title}</div>
                    <div data-testid="date" className="release-date">{releaseDate}</div>

                    <CastDetail id={movie.id} />
                </div>
            </div>
        </div>
    );
}