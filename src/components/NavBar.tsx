import logo from '../assets/IGDb_logo.png';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='flex justify-between'>
      <Link to='/'>
        <img src={logo} />
      </Link>
      <SearchInput />
    </div>
  );
};

export default NavBar;
