import './App.css'
import Home from './Components/Home'
import Card from './Components/Card'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Link, Route, Routes } from 'react-router-dom'
import PokemonPage from './Components/PokemonPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":name" element={<PokemonPage />} />
      </Routes>
    </Router>
  )
}

export default App
