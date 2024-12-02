import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div
    className='footer'
    >
      <button class="btn-17">
        <span class="text-container">
          <span class="text">
          <Link className="link" to="/contact">Contact</Link>

          </span>
        </span>
      </button>
      <button class="btn-17">
        <span class="text-container">
          <span class="text">
          <Link className="link" to="/projects">Projects</Link>
          </span>
        </span>
      </button>
    </div>
  )
}

export default Footer
