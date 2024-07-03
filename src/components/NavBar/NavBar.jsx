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
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <Flex className="navBar" justify={'space-between'} align={'center'} height={'10vh'} w={'100%'}>
        <Heading ml={4}><Link to='/'><img src="https://www.bocashop.com.ar/arquivos/logo-boca.png?v=637316368732270000" alt="Logo" style={{ height: '70px', width: 'auto', padding:'10px'}} /></Link></Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaAngleDown />}>
          Categorias
        </MenuButton>
        <MenuList>
        <MenuItem className="menu-item">
            <Link to="/categorias/Camisetas" className="menu-link">Camisetas</Link>
          </MenuItem>
          <MenuItem className="menu-item">
            <Link to="/categorias/Calzado" className="menu-link">Calzado</Link>
          </MenuItem>
          <MenuItem className="menu-item">
            <Link to="/categorias/Joggins" className="menu-link">Joggins</Link>
          </MenuItem>
          <MenuItem className="menu-item">
            <Link to="/categorias/Shorts" className="menu-link">Shorts</Link>
          </MenuItem>
          <MenuItem className="menu-item">
            <Link to="/categorias/Gorras" className="menu-link">Gorras</Link>
          </MenuItem>
          <MenuItem className="menu-item">
            <Link to="/categorias/Camperas" className="menu-link">Camperas</Link>
          </MenuItem>
        </MenuList> 
      </Menu>
      <CartWidget />
    </Flex>
  );
};

export default NavBar;
