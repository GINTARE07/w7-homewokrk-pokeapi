
import React from 'react';
import Pokemon from "./Pokemon"
import './PokemonList.css';

const PokemonList= ({ pokemons, handlePokemonClick }) => {
  if (pokemons == null || pokemons.length === 0) {
    return <p>Loading...</p>;
  }
  
  console.log (pokemons) // if loged all pokemon, can inspect and see the path to the wanted property. Can also copy it and paste to the vscode.

  return (
    <div className='PokemonList'>
      {pokemons.map((pokemon, index) => {
      return (
        <Pokemon
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
            handlePokemonClick = {handlePokemonClick}
          />
      )}
    )}
    </div>
  )}
  
  export default PokemonList;