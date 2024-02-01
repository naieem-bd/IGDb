import logo from '../assets/IGDb_logo.png';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';
import DrawerSideBar from './DrawerSideBar';

const NavBar = () => {
  return (
    <>
      <div className='app-navbar navbar justify-between bg-base-200 px-3'>
        <DrawerSideBar />
        <Link to='/'>
          <div className='flex items-center app-logo'>
            <img src={logo} />
            <h1 className='hidden md:block ml-3 text-3xl font-bold'>
              Internet Game Database
            </h1>
          </div>
        </Link>
        <SearchInput />
      </div>
    </>
  );
};

export default NavBar;
