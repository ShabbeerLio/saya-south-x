import React from 'react'
import "./Location.css"

const Location = () => {
    return (
        <div className='Location'>
            <div className="Page-title">
                <h3>Location</h3>
            </div>
            <div className="location-box">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.910112722579!2d77.44870277531432!3d28.602473285445328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee63cec82b53%3A0xce8c253846aa1a81!2sSaya%20South%20X!5e0!3m2!1sen!2sin!4v1716445878152!5m2!1sen!2sin"></iframe>
            </div>
        </div>
    )
}

export default Location
