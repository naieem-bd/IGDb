import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatformName from "../hooks/usePlatformName";
import usePlatformList from "../hooks/usePlatformList";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data, error } = usePlatformList();
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatformName(platformId);

  if (error) return null;

  return (
    <>
      {/* <Box mb={2}>
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
            {selectedPlatform?.name || "Platforms"}
          </MenuButton>
          <MenuList>
            {data?.results.map((item) => (
              <MenuItem key={item.id} onClick={() => setPlatformId(item.id)}>
                {item.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box> */}
      <select
        className="select select-bordered w-full max-w-xs"
        onChange={(e) => setPlatformId(parseInt(e.target.value))}
      >
        <option selected>{selectedPlatform?.name || "Platforms"}</option>
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
