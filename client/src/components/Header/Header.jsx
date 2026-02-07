import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (

    <header className="h-wrapper px-6 lg:px-40 z-[1000]">
      <div className='h-container max-w-7xl mx-auto'>

        <Link to="/" onClick={closeMenu}>
          <img className="!mx-6 logo" src="assets/logo-bg.png" alt="Logo" />
        </Link>
        <nav className='hidden lg:block'>
          <ul className='h-menu'>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/Nosotros">Nosotros</Link></li>
          </ul>
        </nav>

        <button
          className="!mx-6 lg:hidden flex flex-col gap-1.5 z-[1100]"
          onClick={() => setMenuOpen(!menuOpen)}>

          <span className={`w-8 h-1 bg-[#c834ca] rounded transition-all
             ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`w-8 h-1 bg-[#c834ca] rounded transition-all 
            ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-8 h-1 bg-[#c834ca] rounded transition-all
             ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>

        </button>

        <div className={`fixed top-0 left-0 w-full h-screen bg-[#f5ebd1] flex flex-col items-center justify-center 
          transition-transform duration-300 ease-in-out 
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
          lg:hidden z-[1050]`}>

          <ul className='flex flex-col items-center gap-10 font-dancing text-4-1 font-bold text-[#c834ca]'>
            <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
            <li><Link to="/servicios" onClick={closeMenu}>Servicios</Link></li>
            <li><Link to="/productos" onClick={closeMenu}>Productos</Link></li>
            <li><Link to="/Nosotros" onClick={closeMenu}>Nosotros</Link></li>
          </ul>

        </div>
      </div >


    </header>


  )
}

export default Header