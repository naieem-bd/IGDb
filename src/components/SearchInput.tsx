import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import useGameQueryStore from '../store';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate('/');
        }
      }}>
      <div className='join'>
        <input
          ref={ref}
          className='input input-bordered join-item'
          placeholder='Search games...'
        />
        <button type='submit' className='btn join-item rounded-r-full'>
          <BsSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
