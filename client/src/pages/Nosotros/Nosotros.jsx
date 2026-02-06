import React from 'react'
import './nosotros.css'

const Nosotros = () => {
    return (
        <div>
            <h1 className='text-center !mt-16 !mb-20 lg:text-left lg:!ml-16 lg:!mt-16 lg:!mb-16 
            section-title'>Nosotros</h1>

            <div className='flex flex-col gap-10 text-center lg:flex-row lg:gap-30 justify-center 
            items-center !mb-20'>

                <div className='flex flex-col overflow-hidden w-[300px] h-[450px] lg:w-[500px] lg:h-[500px] bg-[#F5EBD1] about-container'>
                    <h3 className='text-[1.8rem] text-[#8B5E3C] !my-12 lg:text-[2.5rem] about-title'>Nuestro Origen</h3>

                    <div className='overflow-y-auto custom-scrollbar !px-8 !pb-8'>
                        <p className='text-[0.9rem] text-[#50311C] !px-8 lg:text-[1.3rem] about-text'>
                            Nacimos desde la pasión… y también desde la casualidad. En un momento de pausa, con muchas ganas de emprender y
                            pocos recursos, un paquete de cocoa, harina y azúcar dieron vida a los primeros brownies. Desde ahí, todo cambió.
                            <br /><br />
                            Comenzamos en el año 2021, este camino se ha construido de manera independiente. Más que un negocio,
                            la repostería se convirtió en un propósito. Creemos firmemente que Dios ha sido quien ha puesto los
                            recursos, las oportunidades y la fuerza para continuar, incluso cuando ha habido momentos de duda.
                            <br /><br />
                            Hoy, la repostería no es solo hacer dulces. Es acompañar a cada cliente, ver crecer a los niños,
                            ser parte de historias, celebrar logros y transformar momentos simples en recuerdos únicos y especiales.
                            .</p>

                    </div>

                </div>

                <div className='flex flex-col overflow-hidden w-[300px] h-[450px] lg:w-[500px] lg:h-[500px] bg-[#8B5E3C99] about-container'>
                    <h3 className='text-[1.8rem] text-[#F5EBD1] !my-12 lg:text-[2.5rem] about-title'>¿Por que nosotrs?</h3>
                    <div className='overflow-y-auto custom-scrollbar !px-8 !pb-8'>

                        <p className='text-[0.8rem] !px-8 text-[#FFFBF2] lg:text-[1.3rem] about-text'>
                            Aquí, todo es verdaderamente personalizado. No se trata solo del bizcocho, sino también del trato,
                            la atención y cada detalle que rodea tu pedido. <br /><br />

                            Cuidamos el sabor, la presentación y la calidad de los ingredientes con el mismo amor con el que atendemos a
                            cada cliente. Trabajamos por encargo, con dedicación, puntualidad y el compromiso real de hacerte sentir
                            escuchado y comprendido. <br /><br />

                            Nuestros clientes no solo confían en nuestro trabajo, sino que nos consideran parte de sus momentos más
                            importantes. Honramos esa confianza dando lo mejor de nosotros, una y otra vez, hasta que el resultado
                            sea exactamente lo que esperabas. <br /><br />

                            Nuestra pasión es hacerte feliz y que te sientas plenamente satisfecho; sin prisas, sin excusas y siempre con amor.

                        </p>
                    </div>
                </div>


            </div>
        </div >
    )
}

export default Nosotros