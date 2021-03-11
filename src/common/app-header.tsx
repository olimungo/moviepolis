import './app-header.css';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faSearch } from '@fortawesome/free-solid-svg-icons'

export type Props = { onSearch: any };

export default function AppHeader(props: Props) {
  const [queryString, setQueryString] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setQueryString(event.currentTarget.value);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const { onSearch } = props;
    onSearch(queryString);
  };

  return (
    <div className="app-header">
      <div className="brand">
        <FontAwesomeIcon className="icon-brand" icon={faFilm} />

        <div className="spacer"></div>

        <div>
          Moviepolis
          </div>
      </div>

      <form className="search" onSubmit={handleSubmit}>
        <input type="text" placeholder="Look for a movie or an actor" onChange={handleChange} />

        <div className="spacer"></div>

        <FontAwesomeIcon className="icon-search" icon={faSearch} border onClick={handleSubmit} />
      </form>
    </div>
  );
};