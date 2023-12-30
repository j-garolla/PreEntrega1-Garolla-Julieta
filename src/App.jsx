import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Center, Text } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';
import Combo1 from './components/ComboUno'; 
import Combo2 from './components/ComboDos'; 
import Combo3 from './components/ComboTres';

import { CartProvider } from './components/CartContext';
import Checkout from './components/Checkout';



 const Cart = () => (
 <div>
    <h2>Carrito de compras</h2>
  </div>
 );

const App = () => {
  const welcomeContainerStyle = {
    background: '#f2e8e1', 
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)', 
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
    margin: '20px', 
    padding: '20px', 
  };

  const customTextStyle = {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#239089', 
    fontFamily: 'Courier New, monospace', 
  };

  return (
    <CartProvider>
    <Router>
      <div>
        <NavBar />
        <Center>
          <div style={welcomeContainerStyle}>
            <Text style={customTextStyle}>
              ¡Bienvenido a Café Clue!
            </Text>
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer greeting="Descubre una experiencia culinaria inolvidable, ya sea que estés buscando disfrutar por tu cuenta o el regalo perfecto. Bienvenido a nuestra cafetería virtual, donde cada momento se convierte en un deleite para tus sentidos." />}
              />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              { <Route path="/cart" element={<Cart />} /> }
              <Route path="/catalog/combo1" element={<Combo1 />} />
              <Route path="/catalog/combo2" element={<Combo2 />} />
              <Route path="/catalog/combo3" element={<Combo3 />} /> 
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            
              </Routes>
            </div>
          </Center>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
