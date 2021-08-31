import { ReactElement } from 'react';
import { FC, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const ScrollToTop: FC<RouteComponentProps> = ({
  children,
  history,
}): ReactElement | null => {
  useEffect(() =>
    history.listen(() => {
      window.scrollTo(0, 0);
    })
  );

  return <>{children}</>;
};

export default withRouter(ScrollToTop);
