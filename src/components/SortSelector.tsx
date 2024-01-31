import useGameQueryStore from '../store';

const SortSelector = () => {
  const sortOrders = [
    { value: '', label: 'Order By' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);

  return (
    <>
      <select
        className='select select-bordered select-sm w-40 focus:outline-none rounded'
        onChange={(e) => setSortOrder(e.target.value)}>
        {sortOrders.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default SortSelector;
