import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const PkmStat = () => {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => setPokemon(res.data.stats));
       },[])
console.log(pokemon)
    return (
        <div>
            <h3 className='titleDetail'>Statistics</h3>
        
        <div className='pkmTypes'>
            
            {pokemon.map(stat=>(
               <div className='typeCard' key={stat.stat.name}> {stat.stat.name} {stat.base_stat}</div> 
            ))}
        </div>
        </div>
    );
};

export default PkmStat;