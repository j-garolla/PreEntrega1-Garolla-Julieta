import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Center, Text } from '@chakra-ui/react';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ProductDetail from './ProductDetail';

const Cart = () => (
<div>
    <h2>Carrito de compras</h2>
</div>
);

const App = () => {
const welcomeTextStyle = {

};

const customTextStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#725752',
};

return (
    <Router>
    <Center>
        <div>
<NavBar />
<Routes>
        <Route
            path="/"
            element={
            <div style={welcomeTextStyle}>
                <Text style={customTextStyle}>
                    ¡Bienvenido a Café Clue!
                </Text>
                <ItemListContainer greeting="Ya sea que estés en busca de una experiencia personal o un regalo temático, nuestra cafetería virtual y e-commerce te ofrecen una experiencia completa de misterio y entretenimiento." />
                </div>
            }
            />
            <Route path="/catalog/:comboName" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
        </div>
    </Center>
    </Router>
);
};

export default App;
