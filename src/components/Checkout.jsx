import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Input, Text } from '@chakra-ui/react';
import { useCart } from './CartContext';
import { addDoc, collection } from 'firebase/firestore';
import { database } from '../firebase/data';

const Checkout = () => {
  const { cartItems, getTotalItems } = useCart();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = async () => {
    const orderData = {
      customerInfo: {
        name: name || '',
        lastName: lastName || '',
        phone: phone || '',
        email: email || '',
        total: getTotalPrice().toFixed(2),
        timestamp: new Date().toISOString(),
      },
      items: cartItems.map((item) => ({
        comboId: item.combo.id || '',
        cantidad: item.cantidad.toString() || '',
        precio: (item.combo.precio !== undefined ? item.combo.precio : 0),
      })),
    };

    try {
      const docRef = await addDoc(collection(database, 'orders'), orderData);
      const orderId = docRef.id;
      console.log('Order ID:', orderId);
      setOrderPlaced(true);
    } catch (error) {
      console.error('Error al agregar la orden a Firebase:', error);
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const precio = typeof item.combo.precio === 'number' ? item.combo.precio : 0;
      return total + item.cantidad * precio;
    }, 0) || 0;
  };
  

  if (orderPlaced) {
    return (
      <Box>
        <Text fontSize="xl" fontWeight="bold">
          ¡Gracias por tu compra, {name}! Tu orden ha sido procesada.
        </Text>

        <Link to="/historial" style={{ textDecoration: 'none', color: 'inherit' }}>
          {/* Agregar un botón o enlace al historial de compras si es necesario */}
        </Link>
      </Box>
    );
  }

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mt="2">
        Resumen del Pedido
      </Text>

      <ul>
        {cartItems.map((item) => (
          <li key={item.combo.id}>
            {item.combo.nombre} x {item.cantidad}
          </li>
        ))}
      </ul>

      <Text mt="4">Precio Total: ${getTotalPrice().toFixed(2)}</Text>

      <Text fontSize="xl" fontWeight="bold" mt="4">
        Información de Contacto
      </Text>

      <Input
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        mt="2"
      />
      <Input
        placeholder="Apellido"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        mt="2"
      />
      <Input
        placeholder="Teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        mt="2"
      />
      <Input
        placeholder="Correo Electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        mt="2"
      />
      <Input
        placeholder="Confirmar Correo Electrónico"
        value={confirmEmail}
        onChange={(e) => setConfirmEmail(e.target.value)}
        mt="2"
      />

      <Button colorScheme="teal" mt="4" onClick={handlePlaceOrder}>
        Realizar Pedido
      </Button>
    </Box>
  );
};

export default Checkout;
