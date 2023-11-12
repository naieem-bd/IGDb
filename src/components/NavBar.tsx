import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/IGDb_logo.png';

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} />
      <Text>Internet Game Database</Text>
    </HStack>
  );
};

export default NavBar;
