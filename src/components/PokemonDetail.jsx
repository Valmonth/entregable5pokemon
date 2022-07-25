import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Pkm from './PkmDetail/Pkm';

const PokemonDetail = () => {
 
    const { id } = useParams()
    const [pkmid, setPkmid ] = useState({});
    const [error, setError] = useState("error");

 useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res =>setPkmid(res.data))
    .catch(err => setError(err.response.data));
   }
 ,[]);
if(error === "Not Found"){
    console.log("NotFaund")
}
/*  console.log(pkmid); */
    return (
        <div>
            <div>
            <Link to="/pokemon">Volver a la Pokedex</Link>
            </div>
            <Pkm/>
        </div>
    );
};

export default PokemonDetail;