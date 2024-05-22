import React from 'react'
import "./Walkthrough.css"
import walk from "../../Assets/Walkthrough/watchthrouth.mp4"
import Form from '../Form/Form'

const Walkthrough = () => {
    return (
        <div className='Walkthrough'>
            <div className='Walkthrough-main'>
                <h2>Book Your Site Visit</h2>
                <div className="walkthrough-item">
                    <div className="walkthrough-left">
                        <iframe src="https://www.youtube.com/embed/rJBsz-PAwfE" title="FAIRFOX EON NOIDA Construction Update April 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="walkthrough-right">
                        <div className="walkthrough-form">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Walkthrough
