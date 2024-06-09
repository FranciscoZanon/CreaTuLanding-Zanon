import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import {
  Menu,
  Heading,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Flex,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import "./NavBar.css";


const NavBar = () => {
  return (
    <Flex className="navBar" justify={'space-between'} align={'center'} height={'10vh'} w={'100%'}>
        <Heading ml={4}><img src="https://upload.wikimedia.org/wikipedia/commons/0/00/Boca_logo_la_mitad_m%C3%A1s_uno.png" alt="Logo" style={{ height: '70px', width: 'auto' }} /></Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaAngleDown />}>
          Categorias
        </MenuButton>
        <MenuList>
          <MenuItem>Camisetas</MenuItem>
          <MenuItem>Joggins</MenuItem>
          <MenuItem>Shorts</MenuItem>
          <MenuItem>Medias</MenuItem>
          <MenuItem>Buzos</MenuItem>
          <MenuItem>Camperas</MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />
    </Flex>
  );
};

export default NavBar;
