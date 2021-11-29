import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="title-container">
      <Link style={{ textDecoration: 'none' }} to="/">
        <h1 className="title">Pokédex</h1>
      </Link>
    </div>
  )
}

export default Header
