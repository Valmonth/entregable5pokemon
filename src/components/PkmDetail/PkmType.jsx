import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const PkmType = () => {
    const { id } = useParams()
    const [ type, useType ] = useState([]);
    const [pokemon, setPokemon] = useState({});
    useEffect(() =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => setPokemon(res.data.types));
       },[])
console.log(pokemon)
    return (
        <div>
            <div>
                {/* {type.map(types =>(
                   
                ))} */}
            </div>
        </div>
    );
};

export default PkmType;