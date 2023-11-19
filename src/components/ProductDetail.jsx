import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Text, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
const { id } = useParams();



const combos = [
    {
    id: '1',
    nombre: 'Combo Salado y Dulce 1',
    descripcion: 'Delicioso combo con opciones saladas y dulces.',
    alimentos: ['Croissant', 'Empanada de carne', 'Café'],
    },
    {
    id: '2',
    nombre: 'Combo Salado y Dulce 2',
    descripcion: 'Perfecta combinación de sabores salados y dulces.',
    alimentos: ['Sandwich de pollo', 'Brownie', 'Té helado'],
    },
    {
    id: '3',
    nombre: 'Combo Salado y Dulce 3',
    descripcion: 'Una experiencia gastronómica única con este combo.',
    alimentos: ['Pizza margarita', 'Galletas de chocolate', 'Limonada'],
    },
    {
    id: '4',
    nombre: 'Combo Salado 1',
    descripcion: 'Misterio en la Mocha Mansion 1: Delicioso combo con opciones saladas.',
    alimentos: ['Sandwich de pollo', 'Papas fritas', 'Refresco'],
    },
    {
    id: '5',
    nombre: 'Combo Salado 2',
    descripcion: 'Misterio en la Mocha Mansion 2: Exquisito combo de sabores salados.',
    alimentos: ['Hamburguesa clásica', 'Aros de cebolla', 'Batido'],
    },
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

const combo = combos.find((c) => c.id === id);

if (!combo) {
    return <Text>Combo no encontrado</Text>;
}


const [cantidad, setCantidad] = useState(1);

const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
};

const disminuirCantidad = () => {
    if (cantidad > 1) {
    setCantidad(cantidad - 1);
    }
};

const agregarAlCarrito = () => {
    console.log(`Agregado al carrito: ${cantidad} ${combo.nombre}`);
};

return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4" m="4">
    <Text fontSize="xl" fontWeight="bold" mt="2">
        {combo.nombre}
    </Text>
    <Text>{combo.descripcion}</Text>
    <Text>Alimentos: {combo.alimentos.join(', ')}</Text>

    <Flex alignItems="center" mt="4">
        <Button colorScheme="teal" onClick={disminuirCantidad}>
        -
        </Button>
        <Text mx="4">{cantidad}</Text>
        <Button colorScheme="teal" onClick={aumentarCantidad}>
        +
        </Button>
    </Flex>

    <Button colorScheme="teal" mt="4" onClick={agregarAlCarrito}>
        Añadir al carrito
    </Button>

    <Link to="/">
        <Button colorScheme="teal" mt="4" ml="2">
        Volver a la página principal
        </Button>
    </Link>
    </Box>
);
};

export default ProductDetail;