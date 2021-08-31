import { FC, ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import ScrollToTop from './commons/ScrollToTop/ScrollToTop';
import Navbar from './commons/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BookDetails from './pages/BookDetails/BookDetails';
import NotFound from './pages/NotFound/NotFound';
import ParticlesBackground from './commons/ParticlesBackground/ParticlesBackground';
import Footer from './commons/Footer/Footer';

const App: FC = (): ReactElement => {
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
                <BookDetails />
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
};

export default App;
