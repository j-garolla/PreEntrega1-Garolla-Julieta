import React from 'react';
import CartWidget from './CartWidget';
import { Menu, MenuButton, MenuList, MenuItem, Box, Flex, Spacer } from '@chakra-ui/react';

const NavBar = () => {
const cafeClueDivStyle = {
    background: '#ffdbbe',
    padding: '20px',
    borderRadius: '10px',
};

const carritoDivStyle = {
    background: '#ffd3d3',
    padding: '20px',
    borderRadius: '10px',
};

const menuButtonStyle = {
    background: '#a8c1b4',
    color: '#725752', 
    borderRadius: '5px', 
    padding: '10px',
    fontFamily: 'Georgia, serif', 
};

const h3Style = {
    color: '#8a6b37',
    fontSize: '32px', 
    fontFamily: 'Georgia, serif', 
    textTransform: 'uppercase', 
};

const menuListStyle = {
    background: '#a8c1b4',
    fontFamily: 'Georgia, serif', 
};

const menuItemStyle = {
    color: '#725752',
};

return (
    <div>
<Flex>
        <Box p='10' style={cafeClueDivStyle}>
<h3 style={h3Style}>Café Clue</h3>
        </Box>
        <Spacer />

        <Menu>
<MenuButton style={menuButtonStyle}>
            Combos: Menús + Misterio
</MenuButton>
<MenuList style={menuListStyle}>
            <MenuItem style={menuItemStyle}>Combo 1: "Café del Crimen"</MenuItem>
            <MenuItem style={menuItemStyle}>Combo 2: "Misterio en la Mocha Mansion"</MenuItem>
            <MenuItem style={menuItemStyle}>Combo 3: "Sherlock y Watson en el Espresso Misterioso"</MenuItem>
            <MenuItem style={menuItemStyle}>Combo 4: "Noches de Intriga"</MenuItem>
</MenuList>
        </Menu>

        <Spacer />
        <Box p='10' style={carritoDivStyle}>
<CartWidget />
        </Box>
</Flex>
    </div>
);
}

export default NavBar;
