import './detail.css';
import * as React from 'react';
import {
    useParams
} from 'react-router-dom';
import { getMovie } from '../services'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export type Movie = {
    id: number,
    original_title: string
}

const movieInit: Movie = {
    id: -1,
    original_title: ''
}

export default function Detail() {
    let { id } = useParams<{ id: string }>();
    const [movie, setMovie] = React.useState<Movie>(movieInit);

    React.useEffect(() => {
        if (id) {
            getMovie(id).then(results => setMovie(results));
        }
    }, [id]);

    // const renderMovie = (movie: any) => {
    //     return (
    //         <li key={movie.id}>
    //             xxx
    //         </li>
    //     );
    // }

    return (
        <div className='movie'>
            {movie.original_title}
        </div>
    );
}