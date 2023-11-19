import React from 'react';

const ItemListContainer = ({ greeting }) => {
  const greetingStyle = {
    fontSize: '20px',
    color: '#239089',
    margin: '10px',
    fontFamily: 'Courier New, monospace',
  };

  return (
    <div>
      <h2 style={greetingStyle}>{greeting}</h2>
    </div>
  );
}

export default ItemListContainer;