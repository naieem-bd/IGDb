import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/IGDb_logo.png";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding={5}>
      <Link to="/">
        <Image src={logo} />
      </Link>
      <SearchInput />
    </HStack>
  );
};

export default NavBar;
