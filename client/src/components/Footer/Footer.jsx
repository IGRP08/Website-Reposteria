import React from 'react'
import './Footer.css'
import Contacts from '../Contacts/Contacts.jsx'

const Footer = () => {
    return (
        <footer className='w-full flex flex-col !mt-16 py-10 w-[100%] h-16 align-center items-center 
        footer-container md:justify-center'>
            <Contacts className="flex flex-row !p-1 gap-2 justify-center md:!hidden" />

            <p className="text-[0.7rem] font-[400] text-white text-center md:text-[1rem] md:items-center 
            md:justify-center">© 2024 Todos los derechos reservados a Makarios Postres</p>

        </footer>
    )
}

export default Footer