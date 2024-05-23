import React from 'react'
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
                        {/* <h3>Contact Us</h3> */}
                        {/* <ul>
                            <li>
                                <Link to='tel: +919821123006'>
                                    <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                            <path strokeDasharray="64" strokeDashoffset="64" d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z">
                                                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate>
                                                <animateTransform attributeName="transform" begin="0.6s;lineMdPhoneCallLoop0.begin+2.6s" dur="0.5s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"></animateTransform>
                                            </path>
                                            <path strokeDasharray="4" strokeDashoffset="4" d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723" opacity="0">
                                                <set id="lineMdPhoneCallLoop0" attributeName="opacity" begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s" to="1"></set>
                                                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s" dur="0.2s" values="4;8"></animate>
                                                <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s;lineMdPhoneCallLoop0.begin+3.3s" dur="0.3s" values="0;4"></animate>
                                                <set attributeName="opacity" begin="1.6s;lineMdPhoneCallLoop0.begin+3.6s" to="0"></set>
                                            </path>
                                            <path strokeDasharray="10" strokeDashoffset="10" d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535" opacity="0">
                                                <set attributeName="opacity" begin="1s;lineMdPhoneCallLoop0.begin+3s" to="1"></set>
                                                <animate fill="freeze" attributeName="stroke-dashoffset" begin="1s;lineMdPhoneCallLoop0.begin+3s" dur="0.2s" values="10;20"></animate>
                                                <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s;lineMdPhoneCallLoop0.begin+3.5s" dur="0.3s" values="0;10"></animate>
                                                <set attributeName="opacity" begin="1.8s;lineMdPhoneCallLoop0.begin+3.8s" to="0"></set>
                                            </path>
                                        </g>
                                    </svg>
                                    9821123006
                                </Link>
                            </li>
                        </ul> */}
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
                </div>
            </div>
            <div className="footer-down">
                <div className="footer-copyright">
                    <p>©2024. Saya South X Noida All Rights Reserved. Disclaimer: This website is intended for informational purposes only and should not be considered the official site.</p>
                    {/* <p>Designed by :<Link href="https://globalitsources.com/">&#160; Global IT Sources</Link></p> */}
                </div>
            </div>
        </div>
    )
}

export default Footer
