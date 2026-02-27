import React from 'react'
import '/styles.css'
import './servicios.css'

const Servicios = () => {
    return (

        <div className='services-container'>
            <h1 className=' text-center !mt-16 !mb-1 lg:text-left lg:!ml-16 lg:!mt-16 lg:!mb-16 section-title'>Servicios</h1>

            <div className='service-wrapper'>

                <div className='w-[360px] h-[350px]   lg:w-[450px] lg:h-[370px]  service-container'>

                    <img className='w-[160px] h-[190px] lg:w-[210px] lg:h-[240px] service-img'
                        src={`${import.meta.env.BASE_URL}assets/Cumpleanos-dom.png`} alt="Sweet Table" />

                    <h3 className='flexCenter text-[1rem] font-[350] text-center lg:text-[1.8rem] 
                lg:font-[450] service-text'>Bizcocho de Cumpleaños</h3>

                </div>

                <div className='w-[360px] h-[350px]  lg:w-[450px] lg:h-[350px]  service-container'>

                    <img className='w-[160px] h-[190px] lg:w-[210px] lg:h-[240px] service-img'
                        src={`${import.meta.env.BASE_URL}assets/sweet-table.jpg`} alt="Sweet Table" />

                    <h3 className='flexCenter lg:text-[1.8rem] text-[1rem] font-[350]
                lg:font-[450] service-text'>Sweet Table</h3>

                </div>

                <div className='w-[360px] h-[350px]  lg:w-[450px] lg:h-[350px]  service-container'>

                    <img className='w-[160px] h-[190px] lg:w-[210px] lg:h-[240px] service-img'
                        src={`${import.meta.env.BASE_URL}assets/bizcocho.jpg`} alt="Bizcocho" />

                    <h3 className='flexCenter text-[1rem] font-[350] lg:text-[1.8rem] 
                lg:font-[450] service-text'>Wedding Cake</h3>
                </div>

                <div className='w-[360px] h-[350px] text-[1rem] font-[350] lg:w-[450px] lg:h-[350px] lg:text-[1.8rem] 
                lg:font-[450] service-container'>

                    <img className='w-[160px] h-[190px] lg:w-[210px] lg:h-[240px] service-img' src={`${import.meta.env.BASE_URL}assets/bizcocho.jpg`} alt="Bizcocho" />

                    <h3 className='flexCenter service-text'>Wedding Cake</h3>

                </div >


            </div>
        </div>

    )
}

export default Servicios