import React from 'react'
import './Footer.css'
import Contacts from '../Contacts/Contacts.jsx'

const Footer = () => {
    return (
        <footer className='w-full flex flex-col !mt-16 py-10 w-[100%] h-16 align-center items-center 
        footer-container lg:justify-center'>
            <Contacts className="flex flex-row !p-1 gap-2 justify-center lg:!hidden" />

            <p className="text-[0.7rem] font-[400] text-white text-center lg:text-[1rem] lg:items-center 
            lg:justify-center">© 2026 Todos los derechos reservados a Makarios Postres</p>

        </footer>
    )
}

export default Footer