import Card from './Card'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Pokedex = require('pokeapi-js-wrapper')
const customOptions = {
  cache: true,
  cacheImages: true
}
const P = new Pokedex.Pokedex(customOptions)

function Home() {
  const [fetched, setFetched] = useState(false)
  const [pokemonData, setPokemonData] = useState([])
  const [startNumber, setStartNumber] = useState(1)
  const [numberOfPokemon, setNumberOfPokemon] = useState(20)

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

  return (
    <div>
      <div className="content-container">
        {fetched
          ? pokemonData.map(({ id, name, sprites, types }) => (
              <Link to={`/${name}`} style={{ textDecoration: 'none', color: 'black' }}>
                <Card key={name} number={id} name={name} image={sprites.front_default} fetched={fetched} type={types} />
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
