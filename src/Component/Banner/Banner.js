import React, { useEffect } from 'react'
import bannerimg from "../../Assets/Banner/banner1.jpg"
import banner2 from "../../Assets/Banner/banner2.jpg"
import "./Banner.css"
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Banner = () => {

    return (
        <>
            <div className="banner">
                <div className="banner-image">
                <img src={bannerimg} alt="GODREJ JARDINIA" />

                    {/* <ReactOwlCarousel
                        loop={Infinity}
                        items={1}
                        nav={false}
                        dots={false}
                        autoplay={true}
                        autoplayTimeout={3000}
                        autoplaySpeed={1000}
                        smartSpeed={1000}
                    >
                        <img src={banner2} alt="GODREJ JARDINIA Sector 146" />
                    </ReactOwlCarousel> */}
                </div>
                {/* <div className="banner-stick">
                    <div className="banner-stick-box">
                        <span>New Launch</span>
                        <h2>Godrej Jardinia</h2>
                        <h5>At Sector 146, Noida</h5>
                        <h5>Stunning architecture influenced by the timeless elegance of European design.</h5>
                        <p>Premium 3 / 4 BHK Residence | Price Starts <span> ₹ 4.95 Cr*</span> </p>
                        <p>Possession in December 2028</p>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Banner
