import Card from './Card'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Link, Route, Routes } from 'react-router-dom'
import PokemonPage from './PokemonPage'

const Pokedex = require('pokeapi-js-wrapper')
const customOptions = {
  cache: true,
  cacheImages: true
}
const P = new Pokedex.Pokedex(customOptions)

function Home() {
  const [pokemonList, setPokemonList] = useState([])
  const [fetched, setFetched] = useState(false)
  const [pokemonData, setPokemonData] = useState([])
  const [startNumber, setStartNumber] = useState(1)
  const [numberOfPokemon, setNumberOfPokemon] = useState(20)

  // let numberList = []

  // let startNumber = 1
  // let numberOfPokemon = 20

  // for (let i = startNumber; i <= numberOfPokemon; i++) {
  //   numberList.push(i)
  // }

  const pushNumbers = (start, total) => {
    let numberList = []
    for (let i = start; i <= total; i++) {
      numberList.push(i)
    }
    return numberList
  }

  const onClick = () => {
    setStartNumber(startNumber + 20)
    setNumberOfPokemon(numberOfPokemon + 20)
    P.getPokemonByName(pushNumbers(startNumber + 20, numberOfPokemon + 20)).then(function(response) {
      setPokemonData(pokemonData.concat(response))
    })
  }

  useEffect(() => {
    P.getPokemonByName(pushNumbers(startNumber, numberOfPokemon)).then(function(response) {
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
              <Link to={el.name} style={{ textDecoration: 'none', color: 'black' }}>
                <Card
                  key={el.id}
                  number={el.id}
                  name={el.name}
                  image={el.sprites.front_default}
                  fetched={fetched}
                  type={el.types}
                />
              </Link>
            ))
          : ''}
      </div>
      <div className="btn-container">
        <button className="show-more-btn" onClick={onClick}>
          Show More
        </button>
      </div>
    </div>
  )
}

export default Home
