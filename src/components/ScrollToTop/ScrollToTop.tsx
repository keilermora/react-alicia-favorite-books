import React from 'react';
//import { RouteComponentProps, withRouter } from 'react-router-dom';

interface ScrollToTopProps {
  children: React.ReactElement;
}

const ScrollToTop = ({ children }: ScrollToTopProps) => {
  React.useEffect(
    () => {}
    // history.listen(() => {
    //   window.scrollTo(0, 0);
    // })
  );

  return <>{children}</>;
};

export default ScrollToTop;
