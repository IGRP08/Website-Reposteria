import React from 'react'
import '/styles.css'
import './servicios.css'

const Servicios = () => {
    return (

        <div className='services-container'>
            <h1 className=' text-center !mt-16 md:text-left md:!ml-16 md:!mt-16 md:!mb-16 section-title'>Servicios</h1>

            <div className='service-wrapper'>

                <div className='w-[360px] h-[350px]   md:w-[450px] md:h-[370px]  service-container'>

                    <img className='w-[160px] h-[190px] md:w-[210px] md:h-[240px] service-img'
                        src="/assets/Cumpleanos-dom.png" alt="Sweet Table" />

                    <h3 className='flexCenter text-[1rem] font-[350] text-center md:text-[1.8rem] 
                md:font-[450] service-text'>Bizcocho de Cumpleaños</h3>

                </div>

                <div className='w-[360px] h-[350px]  md:w-[450px] md:h-[350px]  service-container'>

                    <img className='w-[160px] h-[190px] md:w-[210px] md:h-[240px] service-img'
                        src="/assets/sweet-table.jpg" alt="Sweet Table" />

                    <h3 className='flexCenter md:text-[1.8rem] text-[1rem] font-[350]
                md:font-[450] service-text'>Sweet Table</h3>

                </div>

                <div className='w-[360px] h-[350px]  md:w-[450px] md:h-[350px]  service-container'>

                    <img className='w-[160px] h-[190px] md:w-[210px] md:h-[240px] service-img'
                        src="/assets/bizcocho.jpg" alt="Bizcocho" />

                    <h3 className='flexCenter text-[1rem] font-[350] md:text-[1.8rem] 
                md:font-[450] service-text'>Wedding Cake</h3>
                </div>

                <div className='w-[360px] h-[350px] text-[1rem] font-[350] md:w-[450px] md:h-[350px] md:text-[1.8rem] 
                md:font-[450] service-container'>

                    <img className='w-[160px] h-[190px] md:w-[210px] md:h-[240px] service-img' src="/assets/bizcocho.jpg" alt="Bizcocho" />

                    <h3 className='flexCenter service-text'>Wedding Cake</h3>

                </div >


            </div>
        </div>

    )
}

export default Servicios