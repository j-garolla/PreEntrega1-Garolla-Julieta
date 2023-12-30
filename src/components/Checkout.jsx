import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Input, Text } from '@chakra-ui/react';
import { useCart } from './CartContext';
import { addDoc, collection } from 'firebase/firestore';  // Importar funciones de Firebase
import { database } from '../firebase/data';  // Importar la instancia de Firebase

const Checkout = () => {
  // Obtener datos del carrito y funciones necesarias desde el contexto
  const { cartItems, getTotalItems } = useCart();

  // Estados para la información del cliente
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');

  // Estado para manejar si la orden ha sido colocada
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Función para manejar el proceso de realizar un pedido
  const handlePlaceOrder = async () => {
    // Construir el objeto de la orden
    const orderData = {
      customerInfo: {
        name,
        lastName,
        phone,
        email,
        total: getTotalItems(),
        timestamp: new Date().toISOString(),
      },
      items: cartItems.map((item) => ({
        comboId: item.combo.id,
        cantidad: item.cantidad.toString(),
      precio: item.combo.precio,
      })),
    };

    try {
      // Agregar la orden a la colección "orders" en Firebase
      const docRef = await addDoc(collection(database, 'orders'), orderData);

      // Obtener el ID único del documento recién agregado
      const orderId = docRef.id;

      // Imprimir el ID de la orden en la consola (puedes hacer algo más con él)
      console.log('Order ID:', orderId);

      // Establecer el estado para mostrar el mensaje de confirmación u otras acciones
      setOrderPlaced(true);
    } catch (error) {
      console.error('Error al agregar la orden a Firebase:', error);
      // Manejar el error según sea necesario
    }
  };

  // Componente para mostrar el historial de compras
  const HistorialDeCompras = ({ historialData, total }) => {
    return (
      <div>
        <h2>Historial de Compras</h2>
        {/* Contenido del historial de compras */}
        <ul>
          {historialData.map((historialItem) => (
            <li key={historialItem.id}>
              <p>Fecha: {historialItem.fecha}</p>
              <p>Total: {historialItem.total}</p>
              <ul>
                {historialItem.items.map((item) => (
                  <li key={item.combo.id}>
                    {item.combo.nombre} x {item.cantidad}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        {/* Mostrar el precio total */}
        <p>Precio Total: {total}</p>
      </div>
    );
  };

  // Si la orden ha sido colocada, mostrar el mensaje de confirmación y el historial de compras
  if (orderPlaced) {
    return (
      <Box>
        <Text fontSize="xl" fontWeight="bold">
          ¡Gracias por tu compra, {name}! Tu orden ha sido procesada.
        </Text>
       

        {/* Agregar un enlace al historial de compras */}
        <Link to="/historial" style={{ textDecoration: 'none', color: 'inherit' }}>
          {/* <Button colorScheme="teal" mt="4" ml="2" color='#c0c0c0'>
            Ver Historial de Compras
          </Button> */}
        </Link>
      </Box>
    );
  }

  // Si la orden no ha sido colocada, mostrar el resumen del pedido y el formulario de información de contacto
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

      <Text mt="4">Total: {getTotalItems()}</Text>

      <Text fontSize="xl" fontWeight="bold" mt="4">
        Información de Contacto
      </Text>

      {/* Formulario de información de contacto */}
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

      {/* Botón para realizar el pedido */}
      <Button colorScheme="teal" mt="4" onClick={handlePlaceOrder}>
        Realizar Pedido
      </Button>
    </Box>
  );
};

export default Checkout;
