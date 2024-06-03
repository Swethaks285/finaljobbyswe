import {Component} from 'react'
import Login from '../Login'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="bg-full">
        <div className="bg-cen">
          <h1 className="h1">Find The Job That Fits Your Life</h1>
          <p className="p">
            Millions of people are searching for jobs, salary information,
            company reviews. Find the job that fits your abilities and
            potential.
          </p>
          <button type="button" className="btn">
            Find Jobs
          </button>
        </div>
        <Login />
      </div>
    )
  }
}

export default Home
