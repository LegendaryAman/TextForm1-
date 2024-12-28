import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <div className="card text-center">
    <div className="card-header">
      <ul className="nav nav-tabs card-header-tabs">
        <li className="nav-item">
    <a className="nav-link active" aria-current="true" href="/">{props.Title}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">{props.About}</a>
        </li>
      </ul>
    </div>
   
  </div>
  )
}
/* PropTypes show the type of prop means it is string,objectr or Number */
Navbar.propTypes = {
    Title : PropTypes.string,
    About : PropTypes.string
}
// default props 
Navbar.defaultProps = {
    Title : 'Set title here',
    About : 'About text here'
}