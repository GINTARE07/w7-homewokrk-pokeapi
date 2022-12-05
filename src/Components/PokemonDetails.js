import React from 'react';

function PokemonDetails({name, height, weight, image}) {


  return (
    <div className="pokemon">
      <label>Name: </label>{name}
      <label>Height: </label>{height}
      <label>Weight: </label>{weight}
      <img
        src={image}
        alt={name} />

    </div>
  );
};

export default PokemonDetails;
