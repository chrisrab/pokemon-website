import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './PokemonPage.css'
import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Pokedex = require('pokeapi-js-wrapper')

const P = new Pokedex.Pokedex()

const PokemonPage = () => {
  const { name, id } = useParams()
  const [pokemon, setPokemon] = useState([])
  const [fetched, setFetched] = useState(false)
  const [otherPokemon, setOtherPokemon] = useState([])
  const [otherFetched, setOtherFetched] = useState(false)

  useEffect(() => {
    P.getPokemonByName(name)
      .then(function(response) {
        setPokemon(response)
        setFetched(true)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  console.log(pokemon.id)

  useEffect(() => {
    if (fetched) {
      P.getPokemonByName([pokemon.id - 1, pokemon.id + 1])
        .then(function(response) {
          setOtherPokemon(response)
          setOtherFetched(true)
        })
        .catch(e => {
          console.log(e)
        })
    }
  }, [fetched])

  console.log(otherPokemon)

  const colourPicker = type => {
    let colour

    switch (type) {
      case 'grass':
        colour = '#58C144'
        break
      case 'fire':
        colour = '#C17C44'
        break
      case 'bug':
        colour = '#26732F'
        break
      case 'fairy':
        colour = '#E4B3E6'
        break
      case 'poison':
        colour = '#683399'
        break
      case 'psychic':
        colour = '#862D80'
        break
      case 'flying':
        colour = '#7DBED4'
        break
      case 'water':
        colour = '#3E7BBB'
        break
      case 'electric':
        colour = '#B4A03C'
        break
      case 'ground':
        colour = '#604920'
        break
      case 'rock':
        colour = 'gray'
        break
      case 'fighting':
        colour = '#391316'
        break
      case 'ice':
        colour = '#B6D3E7'
        break
      case 'steel':
        colour = '#87898C'
        break
      case 'ghost':
        colour = '#201F5C'
        break
      case 'dragon':
        colour = '#A4375A'
        break
      default:
        colour = 'black'
        break
    }
    return colour
  }

  if (!otherFetched) {
    return <div></div>
  } else {
    return (
      <div className="pokemon-container">
        <div className="title-container">
          <Link to={`/ivysaur`}>
            <p className="previous">
              <HiArrowCircleLeft style={{ marginRight: '15px' }} />
              {otherPokemon[0].name}
            </p>
          </Link>
          <h1 className="page-name">{pokemon.name}</h1>
          <p className="next">
            {otherPokemon[1].name} <HiArrowCircleRight style={{ marginLeft: '15px' }} />
          </p>
        </div>
        <div className="image-container">
          <img className="main-image" src={pokemon.sprites.other['official-artwork'].front_default} alt="pokemon" />
        </div>
        <div className="details-container">
          <div className="pokedex-data">
            <h2 style={{ fontWeight: '800', fontSize: '28px' }}>Pokedex Data</h2>
            <table className="data-table">
              <tbody>
                <tr>
                  <td className="left">Pokedex Number</td>
                  <td>{pokemon.id}</td>
                </tr>
                <tr>
                  <td className="left">Weight</td>
                  <td>{`${pokemon.weight / 10}kg`}</td>
                </tr>
                <tr>
                  <td className="left">Height</td>
                  <td>{`${pokemon.height / 10}m`}</td>
                </tr>
                <tr>
                  <td className="left">Type(s)</td>
                  <td style={{ color: colourPicker(pokemon.types[0].type.name) }} className="capitalise">
                    {pokemon.types[0].type.name}
                  </td>
                  {pokemon.types[1] ? (
                    <td style={{ color: colourPicker(pokemon.types[1].type.name) }} className="capitalise">
                      {pokemon.types[1].type.name}
                    </td>
                  ) : (
                    ''
                  )}
                </tr>
                <tr>
                  <td className="left">Abilities</td>
                  {pokemon.abilities.map(el => (
                    <td style={{ paddingRight: '20px' }} key={el.ability.name} className="capitalise">
                      {el.ability.name}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="stats-container">
            <h2 style={{ fontWeight: '800', fontSize: '28px' }}>Base Stats</h2>
            <table className="stats-table">
              <tbody>
                <tr>
                  <td className="left">HP</td>
                  <td>{pokemon.stats[0].base_stat}</td>
                </tr>
                <tr>
                  <td className="left">Attack</td>
                  <td>{pokemon.stats[1].base_stat}</td>
                </tr>
                <tr>
                  <td className="left">Defense</td>
                  <td>{pokemon.stats[2].base_stat}</td>
                </tr>
                <tr>
                  <td className="left">Special Attack</td>
                  <td>{pokemon.stats[3].base_stat}</td>
                </tr>
                <tr>
                  <td className="left">Special Defense</td>
                  <td>{pokemon.stats[4].base_stat}</td>
                </tr>
                <tr>
                  <td className="left">Speed</td>
                  <td>{pokemon.stats[5].base_stat}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default PokemonPage
