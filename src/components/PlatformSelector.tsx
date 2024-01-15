import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { BsChevronBarDown } from 'react-icons/bs';
import usePlatformName from '../hooks/usePlatformName';
import usePlatformList from '../hooks/usePlatformList';
import useGameQueryStore from '../store';

const PlatformSelector = () => {
  const { data, error } = usePlatformList();
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatformName(platformId);

  if (error) return null;

  return (
    <select
      className='select select-bordered select-sm w-full max-w-xs'
      onChange={(e) => setPlatformId(parseInt(e.target.value))}>
      <option selected>Platforms</option>
      {data?.results.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default PlatformSelector;
