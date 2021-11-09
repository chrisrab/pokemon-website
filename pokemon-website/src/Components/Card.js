const Card = ({ name, image, type, fetched }) => {
  const capitaliseFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const colourPicker = type => {
    let colour

    switch (type) {
      case 'grass':
        colour = 'green'
        break
      case 'fire':
        colour = 'orange'
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
      <img className="sprite" src={image} alt="pokemon sprite" />
      <div className="type-container">
        {fetched ? (
          <p style={{ color: colourPicker(type[0].type.name) }} className="type">
            {capitaliseFirstLetter(type[0].type.name)}
          </p>
        ) : (
          '0'
        )}
        {fetched && type[1] ? <p className="type">{capitaliseFirstLetter(type[1].type.name)}</p> : ''}
      </div>
    </div>
  )
}

export default Card
