import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Pkm = () => {
    const { id } = useParams()
    const [pokemon, setPokemon ] = useState({})

    useEffect(() =>{
     axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
     .then(res => setPokemon(res.data));
    },[])
 console.log(pokemon)
    return (
        <div className='pkmBox'>
            <section className='pkmInfo'>
            <h2 className='pkmTitle'>Pokemon Name: {pokemon.name}</h2>
            <div >
                <img className='pkmImgInfo' src={pokemon.sprites?.other?.home?.front_default}/>
            </div>
            <div className='pkmHW'>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            </div>
        </section>
        </div>
    );
};

export default Pkm;