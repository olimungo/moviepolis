import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { AppHeader, AppFooter } from './common';
import { GenresList } from './genres';

function App() {
  const onSearch = () => {
    console.log('onSearch...');
  }

  return (
    <div className='App'>
      <AppHeader searchItems='toto' onSearch={onSearch} />

      <div className='mainbody'>
        <Router>
          <Switch>
            <Route path='/home'>
              HOME
            </Route>
            <Route path='/genres'>
              <GenresList text="LIST GENRES" />
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
