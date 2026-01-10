// import React from 'react'
// import '/styles.css'
// import './Productos.css'

// const Productos = () => {
//     return (
//         <div>
//             <h1 className='section-title'>Productos</h1>

//             <div className="products-wrapper">
//                 <div className='relative group'>
//                     <div className="product-container">
//                         <h3 className='product-text'>Postres</h3>
//                     </div>
//                     <img className='w-55 h-70' src="/assets/Bizcocho-porcion-bg.png" alt="Porcion Bizcocho" />
//                 </div>
//                 <div className="product-container">
//                     <h3 className='product-text'>Bizcocho Cumpleaños</h3>
//                     <img className='object-right-top w-95 h-120 ' src="/assets/cumpleanos-bg.png" alt="Porcion Bizcocho" />
//                 </div>
//                 <div className="product-container">
//                     <h3 className='product-text'>Sweet Table</h3>
//                     <div className='image-container'>
//                         <img className='object-right-top w-95 h-120' src="/assets/macarronies-bg.png" alt="Sweet Table" />
//                     </div>
//                 </div>
//                 <div className="product-container">
//                     <h3 className='product-text'>Bodas</h3>
//                     <img className='w-95 h-120' src="/assets/bodas-bg.png" alt="Porcion Bizcocho" />
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Productos

import React from 'react';
import './Productos.css';

const Productos = () => {
    // We define the unique position and color for each product here
    const products = [
        {
            title: "Postres",
            img: "/assets/Bizcocho-porcion-bg.png",
            bgColor: "bg-[#E7A5E1]", // Figma Purple
            // Centered vertically on the right edge
            imgPos: "right-16 top-28 -translate-y-1/2 w-55 h-70"
        },
        {
            title: <>Bizcocho<br />Cumpleaños</>,
            img: "/assets/cumpleanos-bg.png",
            bgColor: "bg-[#E7A5E1]",
            // Breaking the top and right edges
            imgPos: "-right-15 -top-45 w-95 h-120"
        },
        {
            title: "Sweet Table",
            img: "/assets/macarronies-bg.png",
            bgColor: "bg-[#F5EDD8]", // Figma Beige
            // Sitting on the bottom right edge
            imgPos: "-right-18 -top-40 w-85 h-108"
        },
        {
            title: "Bodas",
            img: "/assets/bodas-bg.png",
            bgColor: "bg-[#F5EDD8]",
            // Breaking the top and right edges
            imgPos: "-right-30 -top-55 w-105 h-135"
        },

    ];

    return (
        <div className="section-container">
            <h1 className='section-title text-left !ml-16 !mt-4 !mb-26'>Productos</h1>


            {/* Grid container with large horizontal gap to allow images space to "bleed" */}
            <div className="flex flex-wrap justify-center gap-x-32 gap-y-24 mx-w-[1200px] mx-auto">
                {products.map((product, index) => (
                    <div key={index} className="product-card-wrapper w-full md:w-[450px]">

                        {/* 1. The Colored Background Box */}
                        <div className={`product-container ${product.bgColor}`}>
                            <h3 className='product-text'>{product.title}</h3>
                        </div>

                        {/* 2. The Overlapping Image */}
                        {/* 'absolute' moves it out of the box, 'drop-shadow' makes it look premium */}
                        <img
                            src={product.img}
                            alt={product.title}
                            className={`absolute drop-shadow-2xl object-contain ${product.imgPos}`}
                        />

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Productos;