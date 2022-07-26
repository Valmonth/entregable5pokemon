import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Pkm from './PkmDetail/Pkm';
import PkmAbi from './PkmDetail/PkmAbi';
import PkmMoves from './PkmDetail/PkmMoves';
import PkmStat from './PkmDetail/PkmStat';
import PkmType from './PkmDetail/PkmType';
import backbtn from '../img/back.png'

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
        <div className='container'>
            <div className='backto'>
            <Link to="/pokemon"><img className='btn-back' src={backbtn}/>Volver a la Pokedex</Link>
            </div>
            <Pkm/>
            <PkmType/>
            <PkmAbi/>
            <PkmStat/>
            <PkmMoves/>
        </div>
    );
};

export default PokemonDetail;