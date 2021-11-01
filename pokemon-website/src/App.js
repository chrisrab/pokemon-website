import './App.css'
const Pokedex = require('pokeapi-js-wrapper')
const P = new Pokedex.Pokedex()

function App() {
  const interval = {
    offset: 0,
    limit: 20
  }
  P.getPokemonsList(interval).then(function(response) {
    console.log(response)
  })

  return (
    <div className="page-container">
      <div className="title-container">
        <h1 className="title">Pokédex</h1>
      </div>
    </div>
  )
}

export default App
