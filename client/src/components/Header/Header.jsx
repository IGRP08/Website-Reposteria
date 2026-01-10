import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
const Header = () => {
  return (

    <section className="h-wrapper">
      <div className='flexCenter h-container'>

        <img className="logo" src="assets/logo-bg.png" alt="Logo" />
        <div>
          <ul className='flexCenter h-menu'>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
          </ul>
        </div>
      </div >

      <div>

      </div>


    </section>


  )
}

export default Header