import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const PkmMoves = () => {
    const { id } = useParams()
    const [ pokemon, setPokemon ] = useState([]);

    useEffect(() =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res =>setPokemon(res.data.moves))
    },[])
    console.log(pokemon) 
    return (
        <div>
            <h3>Moves</h3>
        <div className='items'>
            {pokemon.map(moves=>(
              <div className='item'>{moves.move.name}</div>
            ))}
        </div>
        </div>
    );
};

export default PkmMoves;