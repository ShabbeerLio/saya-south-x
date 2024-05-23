import React from 'react'
import "./About.css"
import Aboutimg from "../../Assets/About/about.jpg"
import { Link } from 'react-router-dom'

const About = () => {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }

    return (
        <div className="aboutUs">
            <div className="about-title">
                <h1>SAYA SOUTH X</h1>
                <p>RERA No.: UPRERAPRJ17950|09/2023</p>
                {/* <span>Retail and Shopping</span> */}
                <h4>Retail and SHOPPING MALL IN GREATER NOIDA WEST</h4>
            </div>
            <div className="about-main">
                <div className="about-items">
                    <div className="about-left">
                        <div className="about-detail">
                            <h3>SAYA SOUTH X SHOPPING MALL IN GREATER NOIDA WEST</h3>
                            <p>A great endeavour from Saya Buildcon, Saya South X is located in Greater Noida West. Saya South X commercial project is a lifestyle destination surrounded by a huge residential zone which create a highly admirable target market for this retail destination. This commercial project features a commercial spaces with ample number of Retail Shops, Lifestyle Retail, Anchor Stores, Gourmet Dining, 6 Screen Multiplex, Business Suites, Smart Offices, Restaurants, Cafes etc. which houses all sorts of entertainment and recreational activities under one roof.</p>
                            <p>Saya South X retail and shopping segment features a wide collection of retail shops to park all varieties of stores, hyper stores and other branded retail outlets to create a world class shopping destination for the urban societies of Noida. Along with the traditional Saya South X Shopping Mall, this mall also hosts restaurants, bars and cafeterias to suffice the appetite of this city with multi-cuisine delicacies brought from all corners of the globe.</p>
                        </div>
                        <div className="about-button">
                            <a href="/#site-visit" onClick={toTop}>
                                <p>Interested in Site Visit ?</p>
                            </a>
                        </div>
                    </div>
                    <div className="about-right">
                        <img className="image2" src={Aboutimg} alt="GODREJ JARDINIA NOIDA" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
