import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import store from './redux/store';

import SakuraImage from './commons/SakuraImage/SakuraImage';
import ParticlesBackground from './commons/ParticlesBackground/ParticlesBackground';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Book from './pages/Book/Book';
import NotFound from './pages/NotFound/NotFound';

library.add(faSearch);
library.add(faCaretLeft);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <main>
          <SakuraImage />
          <ParticlesBackground />
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/book/:id" component={Book} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </main>
      </Provider>
    );
  }
}

export default App;
