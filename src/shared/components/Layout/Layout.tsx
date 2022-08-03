import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';
import { ParticlesBackground } from '../ParticlesBackground';
import { ScrollToTop } from '../ScrollToTop';

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
