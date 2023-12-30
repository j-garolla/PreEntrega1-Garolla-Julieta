import React, { useEffect, useState } from 'react';
import { Box, Text, Image, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../firebase/data';

const ComboUno = ({ greeting }) => {
  const greetingStyle = {
    fontSize: '20px',
    color: '#239089',
    margin: '10px',
    fontFamily: 'Courier New, monospace',
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsRef = collection(database, 'items');

    getDocs(itemsRef).then((snapshot) => {
      const itemsData = snapshot.docs
        .filter((doc) => ['1', '2', '3'].includes(doc.id)) // Filtrar solo los ID 1, 2 y 3
        .map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

      setItems(itemsData);
    });
  }, []);

  return (
    <div>
      <h2 style={greetingStyle}>{greeting}</h2>

      {/* Renderizar los datos en tu componente */}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img
              src={item.imagenURL}
              alt={item.nombre}
              style={{ maxWidth: '100px', maxHeight: '600px' }}
            />
            <p>{item.nombre}</p>
            <p>{item.descripcion}</p>
            <Button colorScheme="teal">
              <Link to={`/product/${item.id}`}>Ver más detalles</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComboUno;
