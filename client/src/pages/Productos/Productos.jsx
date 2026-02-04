import React from 'react';
import './Productos.css';

const Productos = () => {
    const products = [
        {
            title: "Postres",
            img: "/assets/Bizcocho-porcion-bg.png",
            bgColor: "bg-[#C834CA99]",
            textColor: "text-white",
            imgPos: "right-2 top-1/2 -translate-y-1/2 w-36 md:right-16 md:top-28 md:w-[220px] md:h-[280px]"
        },
        {
            title: <>Bizcocho<br />Cumpleaños</>,
            img: "/assets/cumpleanos-bg.png",
            bgColor: "bg-[#F5EDD8] md:bg-[#C834CA99]",
            textColor: " text-[#C834CA] md:text-white",
            // Mobile: Smaller top overlap | Desktop: Your original values
            imgPos: "-right-4 -top-20 w-48 md:-right-[60px] md:-top-[180px] md:w-[380px] md:h-[480px]"
        },
        {
            title: "Sweet Table",
            img: "/assets/macarronies-bg.png",
            bgColor: "bg-[#C834CA99] md:bg-[#F5EDD8]",
            textColor: " text-white md:text-[#C834CA]",
            imgPos: "-right-6 -top-25 w-44 md:-right-[72px] md:-top-[160px] md:w-[340px] md:h-[430px]"
        },
        {
            title: "Bodas",
            img: "/assets/bodas-bg.png",
            bgColor: "bg-[#F5EDD8]",
            textColor: " text-[#C834CA]",
            imgPos: "-right-6 -top-22 w-48 md:-right-[120px] md:-top-[220px] md:w-[420px] md:h-[540px]"
        },

    ];

    return (
        <div className="section-container overflow-x-clip">
            <h1 className='text-center md:text-left !mb-14 md:!ml-16 md:!mt-4 md:!mb-26 section-title'>Productos</h1>


            <div className="flex flex-wrap justify-center gap-x-25 gap-y-20 md:gap-x-32 md:gap-y-28 mx-w-[1200px] mx-auto">
                {products.map((product, index) => (
                    <div key={index} className="product-card-wrapper w-full w-[90%] md:w-[500px]">

                        <div className={`product-container h-[8rem] md:h-[12rem] ${product.bgColor}`}>
                            <h3 className={`product-text text-[1.5rem] font-[300] md:text-[2.5rem] font-[400] ${product.textColor}`}>{product.title}</h3>
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