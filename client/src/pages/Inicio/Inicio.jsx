import React from 'react'
import './Inicio.css'

const Inicio = () => {
    return (
        <div className="inicio-Container inicio-Visual">

            <div className='text-section'>
                <h2>
                    Makarios Postres
                </h2>
                <p className="inicio-text">
                    Donde Tus Deseos<br />
                    Mas Dulces<br />
                    Son Nuestra Pasion
                </p>
            </div>

            <div>
                <img className="inicio-img" src="/assets/bizcocho.jpg" alt="" />
            </div>

        </div>
    )
}

export default Inicio