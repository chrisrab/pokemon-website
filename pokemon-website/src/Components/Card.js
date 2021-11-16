import { Link } from 'react-router-dom'

const Card = ({ name, image, type, fetched, number }) => {
  const capitaliseFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

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
        colour = '#471849'
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

  return (
    <div className="card-container">
      <h2 className="name">{capitaliseFirstLetter(name)}</h2>
      <h3 className="number">#{number}</h3>
      <img className="sprite" src={image} alt="pokemon sprite" />
      <div className="type-container">
        {fetched ? (
          <p style={{ color: colourPicker(type[0].type.name) }} className="type">
            {capitaliseFirstLetter(type[0].type.name)}
          </p>
        ) : (
          '0'
        )}
        {fetched && type[1] ? (
          <p style={{ color: colourPicker(type[1].type.name) }} className="type">
            {capitaliseFirstLetter(type[1].type.name)}
          </p>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Card
