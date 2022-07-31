import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FilterStateProvider } from 'shared/contexts/FilterState/FilterStateProvider';
import { FirebaseDataStateProvider } from 'shared/contexts/FirebaseDataState/FirebaseDataProvider';
import { Navbar } from 'shared/components/Navbar';
import { Footer } from 'shared/components/Footer';
import { ParticlesBackground } from 'shared/components/ParticlesBackground';
import { ScrollToTop } from 'shared/components/ScrollToTop';

const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));
const BookDetails = lazy(() => import('pages/BookDetails'));
const NotFound = lazy(() => import('pages/NotFound'));

const App = () => {
  return (
    <FilterStateProvider>
      <FirebaseDataStateProvider>
        <ParticlesBackground>
          <Router basename="/alicia-s-favorite-books">
            <ScrollToTop>
              <Navbar />
              <Suspense>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/book/:id" element={<BookDetails />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              <Footer />
            </ScrollToTop>
          </Router>
        </ParticlesBackground>
      </FirebaseDataStateProvider>
    </FilterStateProvider>
  );
};

export default App;
