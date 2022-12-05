import React from 'react';
import './PokemonDetail.css';

function PokemonDetails({name, height, weight, image}) {


  return (
    <>
      <label id='Name'>Name: </label>{name}
      <label id='Height'>Height: </label>{height}
      <label id='Weight'>Weight: </label>{weight}
      <img
        src={image}
        alt={name} />

    </>
  );
};

export default PokemonDetails;
