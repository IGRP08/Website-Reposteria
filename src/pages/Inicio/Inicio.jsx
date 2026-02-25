import React from 'react'
import './Inicio.css'

const Inicio = () => {

    console.log("Inicio page loaded");
    return (
        <div className="grid grid-cols-1 w-[325px] !mt-26 !mb-20 !mx-auto justify-items-center items-center lg:grid-cols-2 lg:flex-row 
        lg:w-[885px] lg:h-[450px]  lg:!mt-[8rem] lg:!p-[3rem] lg:items-center lg:justify-between 
        inicio-Container inicio-Visual text-section">

            <h2 className='order-1 !p-10 lg:col-start-1 lg:row-start-1 lg:self-end'>
                Makarios Postres
            </h2>
            <p className="order-3 lg:col-start-1 lg:row-start-2 lg:self-start">
                Donde Tus Deseos<br />
                Mas Dulces<br />
                Son Nuestra Pasion
            </p>

            <div className="order-2 w-full flex justify-center items-center lg:col-start-2 lg:row-start-1 lg:row-span-2">
                <img className="w-[280px] h-[225px]  rounded-[1rem]  lg:w-[400px] 
                lg:h-[360px]" src={`${import.meta.env.BASE_URL}bizcocho.jpg`} alt="Bizcocho de Bodas" />
            </div>

        </div>
    )
}

export default Inicio