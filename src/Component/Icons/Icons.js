import React from 'react'
import "./Icons.css"
import IconData from './IconData'

const Icons = () => {
    return (
        <div className='Icons'>
            <div className='Icons-main'>
                <div className='icons-box'>
                    {IconData.map((item) => (
                        <>
                            <div className="icon-card" key={item.id}>
                                {item.cover}
                                <h4>{item.title}</h4>
                                <p>{item.title2}</p>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Icons
