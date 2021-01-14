import React from 'react';

function Transformer(props) {

  const showTransformer = () => props.transformers.map(transformer => (
    <img
      className = {props.clicked ? "hidden" : "transformer"}
      // className = 'transformer'
      src = {transformer.url}
      alt = {transformer.name}
    />
))


  return (
    <>
    {showTransformer()}
    </>
  );
}

export default Transformer;
