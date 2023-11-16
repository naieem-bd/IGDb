import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/IGDb_logo.png';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent='space-between'>
      <Image src={logo} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
