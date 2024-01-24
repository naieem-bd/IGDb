import logo from '../assets/IGDb_logo.png';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <div className='navbar bg-base-200'>
        <div className='flex-1'>
          <Link to='/'>
            <img src={logo} />
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
