import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import pokedex from '../images/pokedex.png'

const Header = () => {
  return (
    <div className="header-container">
      <Link style={{ textDecoration: 'none' }} to="/">
        <img className="logo" src={pokedex} alt="pokedex" />
      </Link>
      <Link style={{ textDecoration: 'none' }} to="/search">
        {' '}
        <div className="search-btn">
          <FiSearch className="search" />
        </div>
      </Link>
    </div>
  )
}

export default Header
