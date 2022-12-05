import React, { useEffect, useState } from 'react';
import PokemonDetails from '../Components/PokemonDetails';
import PokemonList from '../Components/PokemonList';

const PokemonFinder = () => {
    const [pokemons, setPokemons] = useState ([]);
    const [selectedPokemon, setSelectedPokemon] = useState ({name: "", height: "", weight: "", image: ""});

    useEffect(() => {
        loadPokemons('https://pokeapi.co/api/v2/pokemon')
    }, [])

    const loadPokemons = url => {
        fetch(url)
          .then(res => res.json())
          .then(pokemonList => setPokemons(pokemonList.results))
          .catch(err => console.error);
      }
    
      const handlePokemonClick = url => {
        fetch(url)
          .then(res => res.json())
          .then(pokemon => {
            console.log (pokemon)
            setSelectedPokemon({
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            image: pokemon.sprites.other["official-artwork"].front_default
           })})
          .catch(err => console.error);
        console.log (url)
      }



    return (
        <>
        <h2>this is Pokemon List:</h2>
        < PokemonList pokemons={pokemons} handlePokemonClick = {handlePokemonClick}/>
        <PokemonDetails name={selectedPokemon.name} weight= {selectedPokemon.weight} height= {selectedPokemon.height} image = {selectedPokemon.image}/>
        </>
    )
}

export default PokemonFinder;
