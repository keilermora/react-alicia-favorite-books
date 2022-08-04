import { Outlet } from 'react-router-dom';
import { Footer, Navbar, ParticlesBackground, ScrollToTop } from 'shared/components';

const Layout = () => {
  return (
    <ParticlesBackground>
      <ScrollToTop>
        <Navbar />
        <Outlet />
        <Footer />
      </ScrollToTop>
    </ParticlesBackground>
  );
};

export default Layout;
