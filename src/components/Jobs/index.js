import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import './index.css'

class Jobs extends Component {
  state = {input: ''}

  render() {
    const {input} = this.state

    return (
      <div className="bgg">
        <div className="search-cont">
          <input type="search" value={input} className="search-input" />
          <button className="btn-1">
            <BsSearch className="search-icon" />
          </button>
        </div>
      </div>
    )
  }
}

export default Jobs
