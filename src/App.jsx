import { useState } from 'react'
import UserInput from './components/UserInput'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import PokemonDetail from './components/PokemonDetail'
import Pokemon from './components/Pokemon'
import Config from './components/Config'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  

  return (
    <HashRouter>
      <Routes>
      <Route path='/' element={<UserInput />}/>

      <Route element={<ProtectedRoutes/> }>
      <Route path='/pokemon' element={<Pokemon />} />
      <Route path='/pokemonDetail/:id' element={<PokemonDetail />}/>
      <Route path='/config' element={<Config />}/>
      </Route>  

      
      
      </Routes>
      </HashRouter>
  )
}

export default App
