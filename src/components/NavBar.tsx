import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/IGDb_logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
