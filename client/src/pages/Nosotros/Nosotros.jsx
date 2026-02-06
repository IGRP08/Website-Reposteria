import React from 'react'
import './nosotros.css'

const Nosotros = () => {
    return (
        <div>
            <h1 className='text-center !mt-16 !mb-20 lg:text-left lg:!ml-16 lg:!mt-16 lg:!mb-16 
            section-title'>Nosotros</h1>

            <div className='flex flex-col gap-10 text-center lg:flex-row lg:gap-30 justify-center 
            items-center !mb-20'>

                <div className=' w-[300px] h-[450px] lg:w-[500px] lg:h-[500px] bg-[#F5EBD1] about-container'>
                    <h3 className='text-[1.8rem] text-[#8B5E3C] !my-12 lg:text-[2.5rem] about-title'>Nuestro Origen</h3>

                    <p className='text-[0.9rem] text-[#50311C] !px-8 lg:text-[1.3rem] about-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                        ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>

                </div>

                <div className='w-[300px] h-[450px] lg:w-[500px] lg:h-[500px] bg-[#8B5E3C99] about-container'>
                    <h3 className='text-[1.8rem] text-[#F5EBD1] !my-12 lg:text-[2.5rem] about-title'>¿Por que nosotrs?</h3>

                    <p className='text-[0.8rem] !px-8 text-[#FFFBF2] lg:text-[1.3rem] about-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                        ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>

                </div>


            </div>
        </div>
    )
}

export default Nosotros