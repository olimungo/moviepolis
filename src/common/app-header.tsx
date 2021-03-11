import './app-header.css';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faSearch } from '@fortawesome/free-solid-svg-icons'

export type Props = { searchItems?: string, onSearch?: any };

export default class AppHeader extends React.Component<Props> {
  onChange() {
    console.log('onChange');
  }

  render() {
    const { searchItems, onSearch } = this.props;

    return (
      <div className='app-header'>
        <div className='brand'>
          <FontAwesomeIcon className='icon-brand' icon={faFilm} />

          <div className='spacer'></div>

          <div>
            Moviepolis
          </div>
        </div>

        <div className='search' onClick={onSearch}>
          <input type="text" placeholder="Look for a movie or an actor" value={searchItems} onChange={this.onChange} />

          <div className='spacer'></div>

          <FontAwesomeIcon className='icon-search' icon={faSearch} />
        </div>
      </div>)
      ;
  }
}