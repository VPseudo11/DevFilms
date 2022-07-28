import React from 'react'
import './ButtonHeader.css'

const ButtonHeader = ({ text, bgColor, borderColor }) => {
    const bgColorStyle = {
        backgroundColor: bgColor,
        border: `2px solid ${borderColor}`
    }
    return (
        <button className='btHeader' style={bgColorStyle}>{text}</button>
    )
}

export default ButtonHeader