import './app-header.css';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faSearch } from '@fortawesome/free-solid-svg-icons';

export type Props = { queryString?: string, onSearch: Function };

export default function AppHeader(props: Props) {
  const history = useHistory();
  const [queryString, setQueryString] = React.useState('');

  React.useEffect(() => {
    if (props.queryString) {
      setQueryString(props.queryString)
    }
  }, [props.queryString]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const { onSearch } = props;
    onSearch(queryString);
  };

  return (
    <div className="app-header">
      <div className="brand">
        <FontAwesomeIcon className="brand-icon" icon={faFilm} onClick={() => history.push('/')} />

        <div className="spacer"></div>

        <div className="brand-name" onClick={_ => history.push('/')}>
          Moviepolis
        </div>
      </div>


      <form className="search" onSubmit={handleSubmit}>
        <input type="text" placeholder="Look for a movie..."
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setQueryString(event.currentTarget.value)}
          value={queryString} />

        <div className="spacer"></div>

        <FontAwesomeIcon className="icon-search" icon={faSearch} border onClick={handleSubmit} />
      </form>
    </div>
  );
};