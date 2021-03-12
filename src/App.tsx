import './App.css';
import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { AppHeader, AppFooter } from './common';
import { MoviesList } from './movies';
import { searchMovies } from './services'

function App() {
  const [queryString, setQueryString] = React.useState('');
  const [moviesList, setMoviesList] = React.useState([]);

  React.useEffect(() => {
    if (queryString) {
      searchMovies(queryString).then(results => setMoviesList(results));
    }
  }, [queryString]);

  const handleSearch = (value: string) => setQueryString(value);

  return (
    // <div>
    //   <div className="titi">
    //     <div className="toto">fgsdgdfg</div>
    //   </div>
    //   <div className="titi">
    //     <div className="toto">fgsdgdfg sfdgsdfgsdfg dsfgsdf gsd fg</div>
    //   </div>
    // </div>

    <div className='App'>
      <AppHeader onSearch={handleSearch} />

      <div className='mainbody'>
        <Router>
          <Switch>
            <Route path='/movies'>
              <MoviesList movies={moviesList} />
            </Route>
            <Route path='/about'>
              ABOUT
            </Route>
            <Route path='/'>
              <Redirect to="/movies" />
            </Route>
          </Switch>
        </Router>
      </div>

      <AppFooter text='FOOTER' />
    </div>
  );
}

export default App;
