import React from "react";
import './contacts.css'



const SocialButtons = () => {
    const openLink = (URL) => {
        window.open(URL, "_blank")
    };

    // Whatsapp Button Constants

    const whatsappNumber = "18098709330"
    const whatMessage = "Hola, vengo de su página web y quería saber más acerca de sus servicios."
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatMessage)}`

    // Instagram Button Constants

    const instagramURL = "https://www.instagram.com/makariospostres?igsh=ZHJtenpmbnRvaDg4"

    // Facebook Button Constants

    const facebookURL = "https://www.facebook.com/share/15wMEGjzjq/"

    return (

        <div className="social-buttons-container">

            {/* Whatsapp Button */}

            <button className="social-button" onClick={() => openLink(whatsappURL)}>

                <img src="/assets/Whatsapp_icon-color.png" alt="Whatsapp" />
            </button>

            {/* Instagram Button */}

            <button className="social-button" onClick={() => openLink(instagramURL)}>

                <img src="/assets/instagram_icon_color.png" alt="Instagram" />
            </button>

            {/* Facebook Button */}

            <button className="social-button" onClick={() => openLink(facebookURL)}>

                <img src="/assets/facebook_icon-color.png" alt="Facebook" />
            </button>

        </div>
    );
};

export default SocialButtons;