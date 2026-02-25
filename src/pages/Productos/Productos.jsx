import React from 'react';
import './Productos.css';

const Productos = () => {
    const products = [
        {
            title: "Postres",
            img: `${import.meta.env.BASE_URL}Bizcocho-porcion-bg.png`,
            bgColor: "bg-[#C834CA99]",
            textColor: "text-white",
            imgPos: "right-2 top-1/2 -translate-y-1/2 w-36 lg:right-16 lg:top-28 lg:w-[220px] lg:h-[280px]"
        },
        {
            title: <>Bizcocho<br />Cumpleaños</>,
            img: `${import.meta.env.BASE_URL}cumpleanos-bg.png`,
            bgColor: "bg-[#F5EDD8] lg:bg-[#C834CA99]",
            textColor: " text-[#C834CA] lg:text-white",
            // Mobile: Smaller top overlap | Desktop: Your original values
            imgPos: "-right-4 -top-20 w-48 lg:-right-[60px] lg:-top-[180px] lg:w-[380px] lg:h-[480px]"
        },
        {
            title: "Sweet Table",
            img: `${import.meta.env.BASE_URL}macarronies-bg.png`,
            bgColor: "bg-[#C834CA99] lg:bg-[#F5EDD8]",
            textColor: " text-white lg:text-[#C834CA]",
            imgPos: "-right-6 -top-25 w-44 lg:-right-[72px] lg:-top-[160px] lg:w-[340px] lg:h-[430px]"
        },
        {
            title: "Bodas",
            img: `${import.meta.env.BASE_URL}bodas-bg.png`,
            bgColor: "bg-[#F5EDD8]",
            textColor: " text-[#C834CA]",
            imgPos: "-right-6 -top-22 w-48 lg:-right-[120px] lg:-top-[220px] lg:w-[420px] lg:h-[540px]"
        },

    ];

    return (
        <div className="!px-8 overflow-x-clip">
            <h1 className='text-center !mt-16 !mb-20 lg:text-left lg:!ml-16 lg:!mt-16 lg:!mb-16 section-title'>Productos</h1>


            <div className="flex flex-wrap justify-center gap-x-25 gap-y-20 lg:gap-x-32 lg:gap-y-28 mx-w-[1200px] mx-auto">
                {products.map((product, index) => (
                    <div key={index} className="product-card-wrapper w-full w-[90%] lg:w-[500px]">

                        <div className={`product-container h-[8rem] lg:h-[12rem] ${product.bgColor}`}>
                            <h3 className={`product-text text-[1.5rem] font-[300] lg:text-[2.5rem] font-[400] ${product.textColor}`}>{product.title}</h3>
                        </div>

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