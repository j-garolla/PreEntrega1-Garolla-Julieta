import React, { useState } from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { Box, Flex, Spacer, HStack, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

const NavBar = () => {
const [isCentered, setIsCentered] = useState(false);

const cafeClueDivStyle = {
    background: isCentered ? '#239089' : 'transparent', 
    padding: '26px',
    borderRadius: '5px',
    boxShadow: isCentered ? '0 0 10px rgba(0, 0, 0, 0.1)' : 'none', 
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
};

const h3Style = {
    color: '#c0c0c0', 
    fontSize: '40px', 
    fontFamily: 'Courier New, monospace', 
    textTransform: 'uppercase',
};

const carritoDivStyle = {
    background: isCentered ? '#239089' : 'transparent', 
    padding: '30px',
    borderRadius: '5px',
    boxShadow: isCentered ? '0 0 10px rgba(0, 0, 0, 0.1)' : 'none', 
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
};

const menuItemStyle = {
    color: '#239089', 
    fontFamily: 'Courier New, monospace', 
};

const handleMenuClick = () => {
    setIsCentered(!isCentered);
};

return (
    <div>
    <Flex>
        <Box p='10' style={cafeClueDivStyle}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3 style={h3Style}>Café Clue</h3>
        </Link>
        </Box>

        <Spacer />

        <HStack spacing='4'>
        <Menu>
            <MenuButton as={Box} style={{ background: '#f8f8f8', borderRadius: '5px', padding: '10px', fontFamily: 'Courier New, monospace' }} onClick={handleMenuClick}>
            Categorías de Combos
            </MenuButton>
            <MenuList>
            <MenuItem style={menuItemStyle}>
                <Link to="/catalog/Combo1">Combos: Salados + Dulces</Link>
            </MenuItem>
            <MenuItem style={menuItemStyle}>
                <Link to="/catalog/Combo2">Combos: Salados</Link>
            </MenuItem>
            <MenuItem style={menuItemStyle}>
                <Link to="/catalog/Combo3">Combos: Dulces</Link>
            </MenuItem>
            </MenuList>
        </Menu>

        <Box p='10' style={carritoDivStyle}>
            <CartWidget />
        </Box>
        </HStack>
    </Flex>
    </div>
);
};

export default NavBar;
