import React from 'react'
import '/styles.css'
import './servicios.css'

const Servicios = () => {
    return (

        <div className='services-container'>
            <h1 className='section-title text-left !ml-16 !mt-16 !mb-16'>Servicios</h1>

            <div className='service-wrapper'>

                <div className='service-container'>
                    <img className='service-img' src="/assets/Cumpleanos-dom.png" alt="Sweet Table" />
                    <h3 className='flexCenter service-text'>Bizcocho de Cumpleaños</h3>
                </div>

                <div className='service-container'>
                    <img className='service-img' src="/assets/sweet-table.jpg" alt="Sweet Table" />
                    <h3 className='flexCenter service-text'>Sweet Table</h3>
                </div>

                <div className='service-container'>
                    <img className='service-img' src="/assets/bizcocho.jpg" alt="Bizcocho" />
                    <h3 className='flexCenter service-text'>Wedding Cake</h3>
                </div>

                <div className='service-container'>
                    <img className='service-img' src="/assets/bizcocho.jpg" alt="Bizcocho" />
                    <h3 className='flexCenter service-text'>Wedding Cake</h3>
                </div >


            </div>
        </div>

    )
}

export default Servicios