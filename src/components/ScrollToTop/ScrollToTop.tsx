import { useEffect } from 'react';
//import { RouteComponentProps, withRouter } from 'react-router-dom';

interface ScrollToTopProps {
  children: React.ReactNode;
}

const ScrollToTop = ({ children }: ScrollToTopProps): JSX.Element => {
  useEffect(
    () => {}
    // history.listen(() => {
    //   window.scrollTo(0, 0);
    // })
  );

  return <>{children}</>;
};

export default ScrollToTop;
