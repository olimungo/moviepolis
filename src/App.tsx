import './App.css';
import {
  Switch,
  Route,
  useHistory
} from 'react-router-dom';
import { AppHeader, AppFooter } from './common';
import { MoviesList, MovieDetail } from './movies';
import { Quote } from './quotes';

function App() {
  const history = useHistory();

  return (
    <div className='App'>
      <AppHeader onSearch={(value: string) => history.push(`/movies?search=${value}`)} />

      <div className='mainbody'>
        <Switch>
          <Route path='/movies'>
            <MoviesList onMovieSelected={(movieId: string) => history.push(`/movie/${movieId}`)} />
          </Route>
          <Route path='/movie/:id'>
            <MovieDetail />
          </Route>
          <Route path='/'>
            <Quote />
          </Route>
        </Switch>

        <div className="filler"></div>
      </div>

      <AppFooter />
    </div>
  );
}

export default App;
