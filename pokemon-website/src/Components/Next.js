import { Link } from 'react-router-dom'
import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi'

const Next = pokemon => {
  return (
    <Link to={`/${pokemon}`}>
      <p className="next">
        <HiArrowCircleRight style={{ marginRight: '15px' }} />
        {pokemon}
      </p>
    </Link>
  )
}

export default Next
