import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




const PokemonItem = ( {pkmUrl} ) => {
 const [pokemon, setPokemon] = useState({})
 useEffect(() =>{
    axios.get(pkmUrl)
    .then(res => setPokemon(res.data))
 },[])

 const navigate = useNavigate();
    return (
        <div className='card-1 card-div' onClick={() => navigate(`/pokemonDetail/${pokemon.id}`)}>
            <div className='gow-img-div img-div'>
                <img className='pkmImg' src={pokemon.sprites?.other?.home?.front_default}/>
            </div>
            <div className='text-container'>
            <h3 className='item-name'>{pokemon.name}</h3>
            <p className='date'>Type:{pokemon.types?.[0].type?.name}</p>
            <div className='stats_a'>
            <p className='current-stat_a'>Hp: {pokemon.stats?.[0].base_stat}</p>
            <p className='current-stat_a'>Attack: {pokemon.stats?.[1].base_stat}</p>
            </div>
            <div className='stats_b'>
            <p className='current-stat_b'>Defense: {pokemon.stats?.[2].base_stat}</p>
            <p className='current-stat_b'>Speed: {pokemon.stats?.[5].base_stat}</p>
            </div>
            
            </div>
                
            
               
           
        </div>
    );
};

export default PokemonItem;