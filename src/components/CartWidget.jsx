import { FiShoppingCart } from 'react-icons/fi';
import { Badge } from "@chakra-ui/react";

const cartIconStyle = {
fontSize: '30px', 
};

const CartWidget = () => {
return (
    <div>
    <Badge variant='subtle' colorScheme='yellow'>4</Badge>
    <FiShoppingCart style={cartIconStyle} />
    </div>
);
};

export default CartWidget;
