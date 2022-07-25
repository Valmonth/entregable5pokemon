import { useState } from 'react'
import UserInput from './components/UserInput'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import PokemonDetail from './components/PokemonDetail'
import Pokemon from './components/Pokemon'
import Config from './components/Config'
import ProtectedRoutes from './components/ProtectedRoutes'
import { useMediaQuery } from 'react-responsive'

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

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
