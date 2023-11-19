import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Combo3 = () => {
const combosDulces = [
    {
    id: '6',
    nombre: 'Combo Dulce 1',
    descripcion: 'Dulce tentación: una mezcla de delicias azucaradas.',
    alimentos: ['Cupcake de vainilla', 'Helado de fresa', 'Frutas frescas'],
    },
    {
    id: '7',
    nombre: 'Combo Dulce 2',
    descripcion: 'Sueños de chocolate: un festín para los amantes del cacao.',
    alimentos: ['Brownie de chocolate', 'Trufas de caramelo', 'Batido de chocolate'],
    },
    {
    id: '8',
    nombre: 'Combo Dulce 3',
    descripcion: 'Para paladares golosos: variedad de postres para todos.',
    alimentos: ['Tarta de frutas', 'Galletas decoradas', 'Café con crema'],
    },
];

return (
    <div>
    <h2>Combos: Dulces</h2>

    {combosDulces.map((combo) => (
        <Box key={combo.id} borderWidth="1px" borderRadius="l" overflow="hidden" p="1" m="4"  width="450px">
        <Text fontSize="xl" fontWeight="bold" mt="2">
            {combo.nombre}
        </Text>
        <Text>{combo.descripcion}</Text>
        <Text>Alimentos: {combo.alimentos.join(', ')}</Text>
        <Link to={`/product/${combo.id}`}> 
            <Button colorScheme="teal" mt="4">
            Ver más detalles
            </Button>
        </Link>
        </Box>
    ))}
    </div>
);
};

export default Combo3;
