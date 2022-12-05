import React, { useEffect, useState, useRef } from 'react';

function Pokemon({name, url, handlePokemonClick}) {

    const onClick = () => {
        handlePokemonClick (url)
    }
  return (
    <div className="pokemon">
      <a href="#" onClick= {onClick}>{name}</a>
    </div>
  );
};

export default Pokemon;
