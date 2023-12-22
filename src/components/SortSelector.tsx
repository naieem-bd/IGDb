import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);

  const currentSortOrder = sortOrders.find((item) => item.value === sortOrder);

  return (
    <Box mb={2}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
          Order by: {currentSortOrder?.value || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((item) => (
            <MenuItem
              onClick={() => setSortOrder(item.value)}
              key={item.value}
              value={item.value}
            >
              {item.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SortSelector;
