import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
  children: React.ReactNode;
}

const ScrollToTop = ({ children }: ScrollToTopProps): JSX.Element => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
