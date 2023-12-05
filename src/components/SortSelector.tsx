import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { BsChevronBarDown } from 'react-icons/bs';

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: 'xxx', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];

  const currentSortOrder = sortOrders.find((item) => item.value === sortOrder);

  return (
    <Box mb={2}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
          Order by: {currentSortOrder?.value || 'Relevance'}
        </MenuButton>
        <MenuList>
          {sortOrders.map((item) => (
            <MenuItem
              onClick={() => onSelectSortOrder(item.value)}
              key={item.value}
              value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SortSelector;
