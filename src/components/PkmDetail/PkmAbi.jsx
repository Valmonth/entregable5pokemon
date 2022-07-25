import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const PkmAbi = () => {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState([]);
    useEffect(() =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => setPokemon(res.data.abilities));
       },[])

       
    return (
        <div>
            <h3>Ability</h3>
        <div className='pkmTypes'>
            {pokemon.map(abi=>(
               <div className='typeCard' key={abi.ability?.name}> {abi.ability?.name}</div>
            ))}
        </div>
        </div>
    );
};

export default PkmAbi;