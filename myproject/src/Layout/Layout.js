import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Navbar />
      {/* The 'Outlet' component acts as a placeholder for rendered child components */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;