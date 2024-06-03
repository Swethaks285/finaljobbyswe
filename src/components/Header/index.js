import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <ul className="head-space">
      <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png" />
      <div className="inside">
        <li>
          <Link className="home" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="job" to="/jobPage">
            Jobs
          </Link>
        </li>
      </div>
      <button className="log-out-btn">Logout</button>
    </ul>
  )
}

export default Header
