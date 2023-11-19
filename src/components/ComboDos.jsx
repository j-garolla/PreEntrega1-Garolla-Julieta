import React from 'react';
import { Box, Text, Image, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Combo2 = () => {
const combosSalados = [
    {
    id: 4, 
    nombre: 'Combo Salado 1',
    descripcion: 'Delicioso combo con opciones saladas.',
    alimentos: ['Sandwich de pollo', 'Papas fritas', 'Refresco'],
    },
    {
    id: 5,
    nombre: 'Combo Salado 2',
    descripcion: 'Exquisito combo de sabores salados.',
    alimentos: ['Hamburguesa clásica', 'Aros de cebolla', 'Batido'],
    },
];

return (
    <div>
        <h2>Combos: Salados</h2>
    {combosSalados.map((combo) => (
        <Box key={combo.id} borderWidth="1px" borderRadius="lpx" overflow="hidden" p="4" m="4">
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

export default Combo2;
