import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PokemonPage from './Components/PokemonPage'

function App() {
  return (
    <div className="page-container">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":id" element={<PokemonPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
