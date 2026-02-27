import React from "react";
import './Contacts.css'



const Contacts = ({ className }) => {
    const openLink = (URL) => {
        window.open(URL, "_blank")
    };

    const whatsappNumber = "18098709330"
    const whatMessage = "Hola, vengo de su página web..."
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatMessage)}`
    const instagramURL = "https://www.instagram.com/makariospostres..."
    const facebookURL = "https://www.facebook.com/share/..."

    return (
        /* 2. Attach the className prop to the div */
        /* Note: We use template literals (backticks) to combine classes */
        <div className={`social-buttons-container ${className}`}>
            <button className="social-button" onClick={() => openLink(whatsappURL)}>
                <img src={`${import.meta.env.BASE_URL}assets/Whatsapp_icon-color.png`} className="w-7 h-7 lg:w-12 lg:h-12" alt="Whatsapp" />
            </button>

            <button className="social-button" onClick={() => openLink(instagramURL)}>
                <img src={`${import.meta.env.BASE_URL}assets/instagram_icon_color.png`} className="w-7 h-7 lg:w-12 lg:h-12" alt="Instagram" />
            </button>

            <button className="social-button" onClick={() => openLink(facebookURL)}>
                <img src={`${import.meta.env.BASE_URL}assets/facebook_icon-color.png`} className="w-7 h-7 lg:w-12 lg:h-12" alt="Facebook" />
            </button>
        </div>
    );
};

export default Contacts;