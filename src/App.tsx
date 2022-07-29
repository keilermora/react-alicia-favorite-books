import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BookDetails from './pages/BookDetails/BookDetails';
import NotFound from './pages/NotFound/NotFound';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import Footer from './components/Footer/Footer';
import { FilterStateProvider } from './contexts/FilterState/FilterStateProvider';
import { FirebaseDataStateProvider } from './contexts/FirebaseDataState/FirebaseDataProvider';

const App = () => {
  return (
    <FilterStateProvider>
      <FirebaseDataStateProvider>
        <ParticlesBackground>
          <Router basename="/alicia-s-favorite-books">
            <ScrollToTop>
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/book/:id" element={<BookDetails />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
              </>
            </ScrollToTop>
          </Router>
        </ParticlesBackground>
      </FirebaseDataStateProvider>
    </FilterStateProvider>
  );
};

export default App;
