import usePlatformList from '../hooks/usePlatformList';
import useGameQueryStore from '../store';

const PlatformSelector = () => {
  const { data, error } = usePlatformList();
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

  if (error) return null;

  return (
    <>
      <select
        className='select select-bordered select-sm w-40 focus:outline-none rounded'
        onChange={(e) => setPlatformId(parseInt(e.target.value))}>
        <option value='1'>Platform List</option>
        {data?.results.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default PlatformSelector;
