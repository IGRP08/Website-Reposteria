import React from 'react'
import './Inicio.css'

const Inicio = () => {
    return (
        <div className="grid grid-cols-1 w-[325px] !mt-26 !mb-20 !mx-auto justify-items-center items-center md:grid-cols-2 md:flex-row 
        md:w-[885px] md:h-[450px]  md:!mt-[8rem] md:!p-[3rem] md:items-center md:justify-between 
        inicio-Container inicio-Visual text-section">

            <h2 className='order-1 !p-10 md:col-start-1 md:row-start-1 md:self-end'>
                Makarios Postres
            </h2>
            <p className="order-3 md:col-start-1 md:row-start-2 md:self-start">
                Donde Tus Deseos<br />
                Mas Dulces<br />
                Son Nuestra Pasion
            </p>

            <div className="order-2 w-full flex justify-center items-center md:col-start-2 md:row-start-1 md:row-span-2">
                <img className="w-[280px] h-[225px]  rounded-[1rem]  md:w-[400px] 
                md:h-[360px]" src="/assets/bizcocho.jpg" alt="" />
            </div>

        </div>
    )
}

export default Inicio