import React, { useState } from 'react'
import "./Footer.css"
import footerimg from "../../Assets/logo.png"
import { Link } from 'react-router-dom'
import { IoLogoWhatsapp } from "react-icons/io5";

const Footer = (props) => {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }

    const [showFullText, setShowFullText] = useState(false);

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    return (
        <div className='Footer'>
            <div className='Footer-main'>
                <div className="footer-box">
                    <div className="footer-item">
                        <img src={footerimg} alt="" />
                        {/* <p>Rera No : UPRERAPRJ303390</p> */}
                    </div>

                    <div className="footer-item">
                        <p>Saya South X RERA No.: UPRERAPRJ17950|09/2023 </p>
                    </div>
                    <div className="footer-item">
                        <p>Plot No. C-01, Sector Ecotech-12, Greater Noida - 201306, Distt. Gautam Budh Nagar, U.P.</p>
                    </div>
                    <div className="footer-item">
                        <p>info@godrejjardiniaa.com</p>
                    </div>
                    <div className="footer-item">
                        {/* <h3>Useful Links</h3> */}
                        <ul>
                            <li>
                                <a href="#" onClick={toTop}>Home</a>
                            </li>
                            <li>
                                <a href="#about" onClick={toTop}>About</a>
                            </li>
                            <li>
                                <a href="#gallery" onClick={toTop}>Gallery</a>
                            </li>
                            <li>
                                <a href="#highlights" onClick={toTop}>Highlights</a>
                            </li>
                            <li>
                                <a href="#plans" onClick={toTop}>Plans</a>
                            </li>
                            <li>
                                <a href="#location" onClick={toTop}>Location</a>
                            </li>
                            <li>
                                <a href="#site-visit" onClick={toTop}>Book A Site Visit</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-item-disclaimer">
                        {showFullText ? (
                            <>
                                <p>
                                    This website is intended for informational purpose only and should not be considered the official site. This is not an offer, an invitation to offer and/or commitment of any nature. The images includes artistic impressions and stock images. The Designs, dimensions, cost, facilities, plans, images, specifications, furniture, accessories, paintings, items, electronic goods, additional fittings/fixtures, decorative items, false ceiling including finishing materials, specifications, shades, sizes and colour of the tiles and other details shown in the images are only indicative in nature and are only for the purpose of illustrating/indicating a possible layout and do not form part of the standard specifications/amenities/services to be provided in the flat. Recipients are advised to use their discretion in relying on the information/amenities described/shown therein.
                                </p>
                                <p className='disclaimer' onClick={toggleText}>Read Less</p>
                            </>
                        ) : (
                            <>
                                <p>
                                    This website is intended for informational purpose only and should not be considered the official site. This is not an offer, an invitation to offer and/or commitment of any nature. The images includes artistic impressions and stock images......
                                </p>
                                <p className='disclaimer' onClick={toggleText}>Read More</p>
                            </>
                        )}
                    </div>
                    <div className="footer-item-policy">
                        <Link onClick={toTop} to={"/disclaimer/"}>Disclaimer & Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
