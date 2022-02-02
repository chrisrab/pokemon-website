import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Pokedex = require('pokeapi-js-wrapper')
const P = new Pokedex.Pokedex()

const Search = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [fetched, setFetched] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const interval = {
    offset: 0,
    limit: 898
  }
  useEffect(() => {
    P.getPokemonsList(interval).then(function(response) {
      setPokemonList(response)
      setFetched(true)
    })
  }, [])

  console.log(pokemonList)
  if (!fetched) {
    return <div></div>
  } else {
    return (
      <div className="search-container">
        <input
          className="search-box"
          type="text"
          placeholder="Search Pokemon"
          onChange={event => {
            setSearchTerm(event.target.value)
          }}
        />
        <div className="search-results">
          {pokemonList.results
            .filter(val => {
              if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
              }
            })
            .map(({ name }) => (
              <Link to={`/${name}`} style={{ textTransform: 'capitalize' }} key={name}>
                <p className="search-name">{name}</p>
              </Link>
            ))}
        </div>
      </div>
    )
  }
}

export default Search
