import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Search from './Components/Search'
import { Route, Routes } from 'react-router-dom'
import PokemonPage from './Components/PokemonPage'

function App() {
  return (
    <div className="page-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path=":name" element={<PokemonPage />} />
      </Routes>
    </div>
  )
}

export default App
