import React from 'react';

function Transformer({ transformer, nextTransformer }) {

  return (
    <img
      className = 'transformer'
      src={ transformer.url }
      alt={ transformer.name }
      onClick={ nextTransformer }
    />
  );
}

export default Transformer;
