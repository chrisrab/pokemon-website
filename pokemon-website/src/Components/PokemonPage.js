import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Pokedex = require('pokeapi-js-wrapper')
const customOptions = {
  cache: true,
  cacheImages: true
}
const P = new Pokedex.Pokedex(customOptions)

const PokemonPage = () => {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState([])
  const [fetched, setFetched] = useState(false)

  useEffect(() => {
    P.getPokemonByName(name).then(function(response) {
      setPokemon(response)
      setFetched(true)
    })
  }, [])

  console.log(pokemon)

  return (
    <div>
      {name}
      {pokemon.weight}
    </div>
  )
}

export default PokemonPage
