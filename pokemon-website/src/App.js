import './App.css'
import { useState, useEffect } from 'react'

const Pokedex = require('pokeapi-js-wrapper')
const P = new Pokedex.Pokedex()

function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [fetched, setFetched] = useState(false)
  const [pokemonData, setPokemonData] = useState([])

  // const interval = {
  //   offset: 0,
  //   limit: 20
  // }

  let numberList = []

  for (let i = 1; i <= 898; i++) {
    numberList.push(i)
  }

  useEffect(() => {
    // P.getPokemonsList(interval).then(function(response) {
    //   setPokemonList(response)
    //   setFetched(true)
    // })
    P.getPokemonByName(numberList).then(function(response) {
      setPokemonData(response)
      setFetched(true)
    })
  }, [])

  if (fetched) {
    console.log(pokemonData[0].name)
  }

  return (
    <div className="page-container">
      <div className="title-container">
        <h1 className="title">Pokédex</h1>
      </div>
      <div className="content-container">{fetched ? pokemonData.map(el => <p key={el.name}>{el.name}</p>) : ''}</div>
    </div>
  )
}

export default App
