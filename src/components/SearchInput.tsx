import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

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
          navigate("/");
        }
      }}
    >
      <div className="join custom-searchbox">
        <input
          ref={ref}
          className="input input-bordered join-item input-sm focus:outline-none rounded"
          placeholder="Search games..."
        />
        <button type="submit" className="btn join-item btn-sm rounded-r">
          <BsSearch /> <span className="hidden sm:block">Search</span>
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
