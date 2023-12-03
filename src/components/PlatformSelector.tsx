import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { BsChevronBarDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Box mb={2}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
          Platforms
        </MenuButton>
        <MenuList>
          {data.map((item) => (
            <MenuItem key={item.id}>{item.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
