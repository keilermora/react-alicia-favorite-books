import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.scss';

import ScrollToTop from './commons/scroll-to-top/ScrollToTop';
import Navbar from './commons/navbar/Navbar';
import Home from './pages/home/Home'
import About from './pages/about/About'
import Book from './pages/book/Book';
import NotFound from './pages/not-found/NotFound'
import ParticlesBackground from './commons/particles-background/ParticlesBackground';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/book/:id">
            <Book />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <ParticlesBackground />
      </Router>
    </Provider>
  );
}

export default App;
