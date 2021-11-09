import './App.css'
import Card from './Components/Card'
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

  let startNumber = 1
  let numberOfPokemon = 100

  for (let i = startNumber; i <= numberOfPokemon; i++) {
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
    console.log(pokemonData[0])
    console.log(pokemonData[0].types[0].type.name)
  }

  return (
    <div className="page-container">
      <div className="title-container">
        <h1 className="title">Pokédex</h1>
      </div>
      <div className="content-container">
        {fetched
          ? pokemonData.map(el => (
              <Card key={el.id} name={el.name} image={el.sprites.front_default} fetched={fetched} type={el.types} />
            ))
          : ''}
      </div>
    </div>
  )
}

export default App
