import React from 'react';
import './PokemonDetail.css';

function PokemonDetails({name, height, weight, image}) {


  return (
    <>
      <label index='Name'>Name: </label>{name}
      <label index='Height'>Height: </label>{height}
      <label index='Weight'>Weight: </label>{weight}
      <img
        src={image}
        alt={name} />

    </>
  );
};

export default PokemonDetails;
