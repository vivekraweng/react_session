import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HomePage extends Component {

  render () {
    return (
      <>
        <h1 style={{textAlign: 'center'}} >Home Page</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/LifeCycle">Lyfe cycle</Link>
          </li>
          <li>
            <Link to="/BtnClass">Btn class</Link>
          </li>
        </ul>
      </>
    )
  }

}

export { HomePage }