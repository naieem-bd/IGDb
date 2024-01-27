import logo from '../assets/IGDb_logo.png';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <div className='app-navbar navbar bg-base-200'>
        <div className='flex-1'>
          <Link to='/'>
            <div className='flex items-center app-logo'>
              <img src={logo} className='mr-4' />
              <h1 className='text-3xl font-bold'>Internet Game Database</h1>
            </div>
          </Link>
        </div>
        <div className='flex-none gap-2'>
          <SearchInput />
        </div>
      </div>
    </>
  );
};

export default NavBar;
