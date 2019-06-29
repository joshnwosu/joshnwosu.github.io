import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      {/* <div className='container'> */}
      <div className='flex-wrapper header'>
        <div className='logo'>
          <Link to='/'>
            <h3>
              Joshua Nwosu<span className='red'>.</span>
            </h3>
          </Link>
        </div>
        <nav className='nav-links'>
          <ul>
            <li>
              <a href='/#'>Twitter.</a>
            </li>
            <li>
              <a href='/#'>Github.</a>
            </li>
            <li>
              <a href='/#'>LinkedIn.</a>
            </li>
            <li>
              <a href='/#' className='hello'>
                Say Hello.
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* </div> */}
    </header>
  )
}

export default Header
