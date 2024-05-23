import React, { useState } from 'react'
import "./Plans.css"
import floor1 from "../../Assets/FloorPlan/floor-plan-1.jpg"
import floor2 from "../../Assets/FloorPlan/floor-plan-2.jpg"
import floor3 from "../../Assets/FloorPlan/floor-plan-3.jpg"
import floor4 from "../../Assets/FloorPlan/floor-plan-4.jpg"
import floor5 from "../../Assets/FloorPlan/floor-plan-5.jpg"
import floor6 from "../../Assets/FloorPlan/floor-plan-6.jpg"
import floor7 from "../../Assets/FloorPlan/floor-plan-7.jpg"
import floor8 from "../../Assets/FloorPlan/refuse-floors1.png"
import floor9 from "../../Assets/FloorPlan/typical2.png"
import FormFloat from '../Navbar/FormFloat'
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Plans = () => {

    const responsiveOptions = {
        0: {
            items: 2,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        },
    };

    const [formopen, setFormopen] = useState(false);
    const formIsOpen = () => {
        setFormopen(!formopen);
    };

    const formIsClose = () => {
        setFormopen(false);
    };
    return (
        <div className='Plans'>
            <div className='Plans-main'>
                <h3>Serviced Apartment Plans & Pricing</h3>
                <div className="plans-card-title">
                    <p>Starting Price @ <span>₹8,990*</span>/sq.ft</p>
                </div>
                <div className="plans-box2">
                    <div className="plans-card">
                        <img src={floor8} alt="GODREJ JARDINIA Sector 146" onClick={formIsOpen} />
                    </div>
                    <div className="plans-card">
                        <img src={floor9} alt="GODREJ JARDINIA NOIDA" onClick={formIsOpen} />
                    </div>
                </div>
            </div>
            <div className='Plans-main'>
                <h3>Retail Plans & Pricing</h3>
                <div className="plans-card-title">
                    <p>Starting Price @ <span>₹27,500*</span>/sq.ft</p>
                </div>
                <div className="plans-box">
                    <ReactOwlCarousel
                        items={6}
                        nav={true}
                        dots={false}
                        responsive={responsiveOptions}
                    >
                        <div className="plans-card">
                            <img src={floor1} alt="GODREJ JARDINIA Sector 146" onClick={formIsOpen} />
                        </div>
                        <div className="plans-card">
                            <img src={floor2} alt="GODREJ JARDINIA NOIDA" onClick={formIsOpen} />
                        </div>
                        <div className="plans-card">
                            <img src={floor3} alt="GODREJ JARDINIA NOIDA, Sector 146" onClick={formIsOpen} />
                        </div>
                        <div className="plans-card">
                            <img src={floor4} alt="GODREJ JARDINIA NOIDA, Sector 146" onClick={formIsOpen} />
                        </div>
                        <div className="plans-card">
                            <img src={floor5} alt="GODREJ JARDINIA NOIDA, Sector 146" onClick={formIsOpen} />
                        </div>
                        <div className="plans-card">
                            <img src={floor6} alt="GODREJ JARDINIA NOIDA, Sector 146" onClick={formIsOpen} />
                        </div>
                        <div className="plans-card">
                            <img src={floor7} alt="GODREJ JARDINIA NOIDA, Sector 146" onClick={formIsOpen} />
                        </div>
                    </ReactOwlCarousel>
                </div>
            </div>
            {formopen && (
                <>
                    <FormFloat formIsClose={formIsClose} />
                </>
            )}
        </div>
    )
}

export default Plans
