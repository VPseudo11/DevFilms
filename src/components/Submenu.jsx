import React from 'react'
import './Submenu.css'

const Submenu = ({ list }) => {
    return (
        <div className='Submenu'>
            <div className='divTop'></div>
            <div className='angle'></div>
            <ul className='OpSubmenu'>
                {list.map(i => {
                    return (
                        <li className='ItemS'><a href="#">{i}</a></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Submenu