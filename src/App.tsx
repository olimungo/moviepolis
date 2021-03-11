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
      searchMovies(queryString).then(reply => setMoviesList(reply.results));
    }
  }, [queryString]);

  const handleSearch = (value: string) => setQueryString(value);

  return (
    <div className='App'>
      <AppHeader onSearch={handleSearch} />

      <div className='mainbody'>
        <Router>
          <Switch>
            <Route path='/home'>
              HOME
            </Route>
            <Route path='/genres'>
              <MoviesList movies={moviesList} />
            </Route>
            <Route path='/about'>
              ABOUT
            </Route>
            <Route path='/'>
              <Redirect to="/genres" />
            </Route>
          </Switch>
        </Router>
      </div>

      <AppFooter text='FOOTER' />
    </div>
  );
}

export default App;
