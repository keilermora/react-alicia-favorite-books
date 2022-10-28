import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import FilterStateProvider from 'shared/contexts/FilterState/FilterStateProvider';
import FirebaseDataStateProvider from 'shared/contexts/FirebaseDataState/FirebaseDataProvider';
import { usePageViews } from 'shared/hooks/usePageViews';

const Layout = lazy(() => import('shared/components/Layout/Layout'));
const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));
const BookDetails = lazy(() => import('pages/BookDetails'));
const NotFound = lazy(() => import('pages/NotFound'));

const App = () => {
  usePageViews();

  return (
    <FilterStateProvider>
      <FirebaseDataStateProvider>
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
      </FirebaseDataStateProvider>
    </FilterStateProvider>
  );
};

export default App;
