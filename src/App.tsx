import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FilterStateProvider } from 'shared/contexts/FilterState/FilterStateProvider';
import { FirebaseDataStateProvider } from 'shared/contexts/FirebaseDataState/FirebaseDataProvider';

const Layout = lazy(() => import('shared/components/Layout'));
const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));
const BookDetails = lazy(() => import('pages/BookDetails'));
const NotFound = lazy(() => import('pages/NotFound'));

const App = () => {
  return (
    <FilterStateProvider>
      <FirebaseDataStateProvider>
        <BrowserRouter basename="/alicia-s-favorite-books">
          <Suspense>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="book/:id" element={<BookDetails />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </FirebaseDataStateProvider>
    </FilterStateProvider>
  );
};

export default App;
