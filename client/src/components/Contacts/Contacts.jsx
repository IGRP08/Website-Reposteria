import React from "react";
import './contacts.css'



// const SocialButtons = () => {
//     const openLink = (URL) => {
//         window.open(URL, "_blank")
//     };

//     // Whatsapp Button Constants

//     const whatsappNumber = "18098709330"
//     const whatMessage = "Hola, vengo de su página web y quería saber más acerca de sus servicios."
//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatMessage)}`

//     // Instagram Button Constants

//     const instagramURL = "https://www.instagram.com/makariospostres?igsh=ZHJtenpmbnRvaDg4"

//     // Facebook Button Constants

//     const facebookURL = "https://www.facebook.com/share/15wMEGjzjq/"

//     return (

//         <div className={`social-buttons-container ${className}`}>

//             {/* Whatsapp Button */}

//             <button className="social-button" onClick={() => openLink(whatsappURL)}>

//                 <img src="/assets/Whatsapp_icon-color.png" alt="Whatsapp" />
//             </button>

//             {/* Instagram Button */}

//             <button className="social-button" onClick={() => openLink(instagramURL)}>

//                 <img src="/assets/instagram_icon_color.png" alt="Instagram" />
//             </button>

//             {/* Facebook Button */}

//             <button className="social-button" onClick={() => openLink(facebookURL)}>

//                 <img src="/assets/facebook_icon-color.png" alt="Facebook" />
//             </button>

//         </div>
//     );
// };

// export default SocialButtons;

// src/components/Contacts/Contacts.jsx

/* 1. Add { className } here to receive the props from App.jsx */


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
                <img src="/assets/Whatsapp_icon-color.png" className="w-7 h-7 md:w-12 md:h-12" alt="Whatsapp" />
            </button>

            <button className="social-button" onClick={() => openLink(instagramURL)}>
                <img src="/assets/instagram_icon_color.png" className="w-7 h-7 md:w-12 md:h-12" alt="Instagram" />
            </button>

            <button className="social-button" onClick={() => openLink(facebookURL)}>
                <img src="/assets/facebook_icon-color.png" className="w-7 h-7 md:w-12 md:h-12" alt="Facebook" />
            </button>
        </div>
    );
};

export default Contacts;