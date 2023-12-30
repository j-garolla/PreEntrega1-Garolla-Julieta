import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Badge, Box } from "@chakra-ui/react";
import { useCart } from './CartContext';

const CartWidget = () => {
  const { getTotalItems } = useCart();

  const cartIconStyle = {
    fontSize: '30px',
    color: '#725752',
    marginLeft: '5px',
  };

  return (
    <Box display="flex" alignItems="center">
      <Badge variant="subtle" colorScheme="yellow" marginRight="2">
        {getTotalItems()}
      </Badge>
      <FiShoppingCart style={cartIconStyle} />
      {/* Agregar un console.log para depuración */}
      {console.log('Total de items en el carrito en CartWidget:', getTotalItems())}
    </Box>
  );}

export default CartWidget;
