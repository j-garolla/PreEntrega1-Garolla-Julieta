import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Badge, Box } from "@chakra-ui/react";

const CartWidget = () => {
const cartIconStyle = {
    fontSize: '30px',
    color: '#725752',
    marginLeft: '5px', 
};

return (
    <Box display="flex" alignItems="center">
    <Badge variant='subtle' colorScheme='yellow' marginRight="2">
        4
    </Badge>
    <FiShoppingCart style={cartIconStyle} />
    </Box>
);
};

export default CartWidget;
