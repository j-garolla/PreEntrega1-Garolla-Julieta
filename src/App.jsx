import React from 'react';
import { Center, Text } from '@chakra-ui/react';
import NavBar from './components/NavBar';



const App = () => {
  const welcomeTextStyle = {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Georgia, serif', 
  };

  const customTextStyle = {
    fontSize: '24px',
    fontWeight: 'bold', 
    color: '#725752', 
  };

  return (
    <Center>
      <div>
        <NavBar />
        <div style={welcomeTextStyle}>
          <Text style={customTextStyle}>
            ¡Bienvenido a Café Clue! Ya sea que estés en busca de una experiencia personal o un regalo temático, nuestra cafetería virtual y e-commerce te ofrecen una experiencia completa de misterio y entretenimiento.
          </Text>
        </div>
      </div>
    </Center>
  );
}

export default App;
