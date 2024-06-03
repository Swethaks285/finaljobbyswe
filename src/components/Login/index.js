import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {name: '', password:''}
  render() {
    const {name,password} = this.state
    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
            alt="website logo"
          />
          <label className="lab-1" htmlFor="name">
            USERNAME
          </label>
          <input type="text" value={name} id="name" />
          <label className='lab-1' htmlFor='pass'>Password</label>
          <input type='password' value={password} id='pass'/>
        </div>
      </div>
    )
  }
}

export default Login
