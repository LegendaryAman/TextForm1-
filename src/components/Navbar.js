import React from 'react'

//import { Outlet,Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className="card text-center">
    <div className="card-header">
      <nav>
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            {/* <Link className="nav-link" to="/">TextForm</Link> */}
            <a className="nav-link" href="/">TextForm</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/AboutUs">About Us</a>
          </li>
        </ul>
      </nav>
    </div>
   {/* <Outlet/> */}
  </div>
  )
}
/* PropTypes show the type of prop means it is string,objectr or Number */
