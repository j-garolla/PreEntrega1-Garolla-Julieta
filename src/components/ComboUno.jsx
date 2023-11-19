import React from 'react';
import { Box, Text, Image, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Combo1 = () => {
return (
    <div>
    <h2>Combos: Salados + Dulce</h2>


    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4" m="4">
        <Text fontSize="xl" fontWeight="bold" mt="2">
        Combo Salado y Dulce 1
        </Text>
        <Text>Descripción del combo salado y dulce.</Text>
        <Button colorScheme="teal" mt="4">
        <Link to="/product/1">Ver más detalles</Link>
        </Button>
    </Box>


    <Box borderWidth="1px" borderRadius="lpx" overflow="hidden" p="4" m="4">
        <Text fontSize="xl" fontWeight="bold" mt="2">
        Combo Salado y Dulce 2
        </Text>
        <Text>Descripción del combo salado y dulce.</Text>
        <Button colorScheme="teal" mt="4">
        <Link to="/product/2">Ver más detalles</Link>
        </Button>
    </Box>

    <Box borderWidth="1px" borderRadius="l" overflow="hidden" p="4" m="4">
        <Image src="ruta-de-la-imagen-3" alt="Combo 3" />
        <Text fontSize="xl" fontWeight="bold" mt="2">
        Combo Salado y Dulce 3
        </Text>
        <Text>Descripción del combo salado y dulce.</Text>
        <Button colorScheme="teal" mt="4">
        <Link to="/product/3">Ver más detalles</Link>
        </Button>
    </Box>
    </div>
);
};

export default Combo1;
