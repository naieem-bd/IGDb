import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className='grid gap-3 content-area'>
        <div className='nav-bar'>
          <SideBar />
        </div>
        <div className='main-content px-3'>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
