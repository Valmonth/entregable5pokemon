import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PokemonItem from './PokemonItem';
import logo from '../img/pokemon.png'
import exitbtn from '../img/xti.webp'


const Pokemon = () => {
    
 const trainer = useSelector(state => state.trainer)
 const [pkms, setPkms] = useState([]);
 const [types, setTypes ] = useState([]);
 const [page, setPage] = useState(0);
 const navigate = useNavigate();


 useEffect( () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${page}`)
    .then(res => setPkms(res.data.results))

    axios.get('https://pokeapi.co/api/v2/type')
    .then(res => setTypes(res.data.results)) 
 }, [page])

const [pkmSearch, setPkmSearch] = useState("");

 const search = e =>{
    e.preventDefault();
    
    navigate(`/pokemonDetail/${pkmSearch.toLowerCase()}/`)
 }
 const filterPkm = e =>{
axios.get(e.target.value)
.then(res => setPkms(res.data.pokemon))
 }


/*  console.log(page) */
 
/* console.log(pkms) */
    return (
        <div >
            <div><Link to="/" className='exittxt'><img src={exitbtn} className='exitto'/>Exit From Pokedex</Link></div>
            <div>
                <img className='pkm-logo' src={logo} alt="" />
            </div>
            <h2 className='title'>Welcome {trainer}</h2>
            <p className='txt'>This is a Pokemon Dexter</p>
            <form className='search' onSubmit={search}>
                <input
                className='input-pkm'
                placeholder='Type the pokemon name or number'
                value={pkmSearch}
                onChange={e => setPkmSearch(e.target.value)}
                required
                />
                <button className='btn-search'>Search Pokemon</button>
            </form>
            <div className='selecction'>
            <article className='select'>
            <select className='sec' onChange={filterPkm}>
                <option className='options' value="">Choose Pokemon Type</option>
                {
                types.map(typ => (
                   <option key={typ.name} value={typ.url}>{typ.name}</option> 
                    
                    ))
                    }
            </select>
            </article>
            </div>
            <div className='btn-advance'>
            {page === 0 ? <button className='btn-a' disabled>Prev Page</button> : <button className='btn-b' onClick={()=> setPage(page - 10)}>Prev Page</button>}
            {page === 1150 ? <button className='btn-a' disabled>Next Page</button> : <button className='btn-b' onClick={()=> setPage(page + 10)}>Next Page</button> }
            </div>
            <div className='container'>
                {
                    pkms.map(pkm => (
                        <div  key={pkm.url ? pkm.url : pkm.pokemon.url}>
                        <PokemonItem pkmUrl={pkm.url ? pkm.url : pkm.pokemon.url } />
                        </div>
                        
                    ))
                }
            </div>
        </div>
    );
};

/* pokemon.url ? pokemon.url : pokemon.pokemon.url */

export default Pokemon;