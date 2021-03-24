import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './commons/navbar/Navbar';
import Home from './pages/home/Home'
import About from './pages/about/About'
import NotFound from './pages/not-found/NotFound'

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
