import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const PkmType = () => {
    const { id } = useParams()
    const [ type, useType ] = useState([]);
    const [pokemon, setPokemon] = useState([]);
    useEffect(() =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => setPokemon(res.data.types));
       },[])

    return (
        <div>
            <h3>Type</h3>
            <div className='pkmTypes'>
                {pokemon.map(pkt => (
                   <div className='typeCard' key={pkt.type?.name}>{pkt.type?.name}</div> 
                ))}
           
            </div>
        </div>
    );
};

export default PkmType;