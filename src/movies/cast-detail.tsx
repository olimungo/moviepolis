import './cast-detail.css';
import * as React from 'react';
import { getCast } from '../services'

export type Cast = {
    id: number,
    name: string,
    character: string
}

export type Props = { id: number };

export default function CastDetail(props: Props) {
    const [cast, setCast] = React.useState<Cast[]>([]);
    const { id } = props;

    React.useEffect(() => {
        if (id) {
            getCast(id).then(results => setCast(results));
        }
    }, [id]);

    const renderCast = (cast: Cast) => {
        return (
            <li data-testid="li" key={cast.id}>
                {cast.name} ({cast.character})
            </li>
        );
    }

    return (
        <div data-testid="container" className='cast-detail'>
            <div className="cast">Cast</div>
            <ul>
                {cast.map((cast: Cast) => renderCast(cast))}
            </ul>
        </div>
    );
}