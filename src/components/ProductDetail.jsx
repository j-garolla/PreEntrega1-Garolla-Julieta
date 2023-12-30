import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Text, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { database } from '../firebase/data';
import { useCart } from './CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [combo, setCombo] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [mensajeAgregado, setMensajeAgregado] = useState(null); // Nuevo estado para el mensaje

  const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const agregarAlCarrito = () => {
    addToCart({ combo, cantidad });
    const mensaje = `Añadiste al carrito: ${cantidad} ${combo.nombre}`;
    setMensajeAgregado(mensaje);
    console.log(mensaje);
  };

  useEffect(() => {
    const docRef = doc(database, 'items', id);
    getDoc(docRef)
      .then((resp) => {
        setCombo({ ...resp.data(), id: resp.id });
      })
      .catch((error) => {
        console.error('Error al obtener el documento:', error);
      });
  }, [id]);

  if (!combo) {
    return <Text>Cargando...</Text>;
  }

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

      {mensajeAgregado && (
        <Text color="green" mt="2">
          {mensajeAgregado}
        </Text>
      )}

      <Link to="/">
        <Button colorScheme="teal" mt="4" ml="2">
          Volver a la página principal
        </Button>
      </Link>
    </Box>
  );
};

export default ProductDetail;
