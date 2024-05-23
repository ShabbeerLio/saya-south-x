import React from 'react'
import "./Overview.css"
import Form from '../Form/Form'
import hall from "../../Assets/CAtegory/shopping mall.jpg"
import food from "../../Assets/CAtegory/entertenment.jpg"
import walking from "../../Assets/CAtegory/fine dine.jpg"
import Shopping from "../../Assets/CAtegory/banquet.jpg"
import banhall from "../../Assets/CAtegory/Business Suites.jpg"
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Overview = () => {
    const responsiveOptions = {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    };
    return (
        <div className="overview">
            <div className="about-main">
                <div className="overview-item">
                    <div className="overview-left">
                        <div className="overview-form">
                            <Form />
                        </div>
                    </div>
                    <div className="overview-right">
                        <div className="overview-title">
                            <h3>Overview</h3>
                        </div>
                        <div className="overview-detail">
                            <p>SAYA SOUTH X, nestled in Sector-146, Noida, stands as a testament to modern living intertwined with natural splendor. This residential enclave redefines urban lifestyle, offering a harmonious blend of contemporary architecture and lush green surroundings. Boasting meticulously crafted apartments, each space is thoughtfully designed to exude elegance and functionality.</p>
                            <p>Residents here enjoy a plethora of amenities designed to cater to every aspect of their well-being, from rejuvenating green spaces to state-of-the-art fitness facilities and recreational areas. With its strategic location, Godrej Jardinia provides seamless connectivity to major hubs across the city, ensuring convenience at every turn. Embracing sustainability and luxury in equal measure, this haven in Noida sets a new benchmark for modern urban living.</p>
                        </div>
                        <div className="overview-category">
                            <ReactOwlCarousel
                                items={6}
                                nav={true}
                                dots={false}
                                responsive={responsiveOptions}
                            >
                                <div className="category-card">
                                    <img src={hall} alt="GODREJ JARDINIA NOIDA, Sector 146" />
                                    <p>Shopping</p>
                                </div>
                                <div className="category-card">
                                    <img src={food} alt="GODREJ JARDINIA Noida Expressway" />
                                    <p>entertainment</p>
                                </div>
                                <div className="category-card">
                                    <img src={Shopping} alt="JARDINIA NOIDA, Sector 146" />
                                    <p>Fine Dining</p>
                                </div>
                                <div className="category-card">
                                    <img src={walking} alt="GODREJ JARDINIA Sector 146 Noida Expressway" />
                                    <p>Banquets</p>
                                </div>
                                <div className="category-card">
                                    <img src={banhall} alt="GODREJ JARDINIA Sector 146 NOIDA" />
                                    <p>Business Suites</p>
                                </div>
                            </ReactOwlCarousel>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview
