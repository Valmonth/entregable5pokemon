import React from 'react';
import { useState } from 'react';
import { trainerInput } from '../store/slices/trainerInput.slice';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { trainerName } from '../store/slices/trainerInput.slice';
import { useDispatch } from 'react-redux';

const UserInput = () => {

    const navigate = useNavigate();
    const [nameTrainer, SetNameTrainer ] = useState("")
    const dispatch = useDispatch();

const submit = e => {
    e.preventDefault();
    if (nameTrainer !== ""){
    dispatch(trainerName(nameTrainer));
    navigate("/pokemon")
    }else{
        alert("Professor Oak Needs Your name to register in to Pokedex")
    }
};

    return (
        <div className='user-interface'>
        <h2 className='title-user'>Pokemon Trainer Name</h2>
        <div className='img-professor' >
            <img className='professor' src='https://static.wikia.nocookie.net/espokemon/images/0/0a/Profesor_Oak_%28XY%29.png/revision/latest?cb=20141130014622' />
        </div>
        <div className='text-box'>
        <article className='typewriter title-user'>
            <h4>Hello, Welcome to my pokedex, <br/>
                to continue please type your name</h4>
        </article>
        </div>
        
        <div className='login'>
            <form className='form' onSubmit={submit}>
            <label className='trainerLabel'>Type your name: </label>
            <input
            className='inputer'
            type="text"
            value={nameTrainer}
            onChange={e => SetNameTrainer(e.target.value)}
            />
            
            <button className='btn-ini'></button>
            <label className='message'>Type your name and touch the pokeball to continue</label>
            </form>
        </div>
        </div>
    );
};

export default UserInput;