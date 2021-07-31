import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.scss';

import ScrollToTop from './commons/scroll-to-top/ScrollToTop.tsx';
import Navbar from './commons/navbar/Navbar.tsx';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Book from './pages/book/Book';
import NotFound from './pages/not-found/NotFound';
import ParticlesBackground from './commons/particles-background/ParticlesBackground.tsx';
import Footer from './commons/footer/Footer';

function App() {
  return (
    <Provider store={store}>
      <ParticlesBackground>
        <Router basename="/alicia-s-favorite-books">
          <ScrollToTop>
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
            <Footer />
          </ScrollToTop>
        </Router>
      </ParticlesBackground>
    </Provider>
  );
}

export default App;
