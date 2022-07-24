import React from 'react'
import ButtonHeader from './ButtonHeader'
import './Header.css'


const Header = ({ devFilmsLogo }) => {
    const colorButons = ["#6e1c28", 'transparent']
    return (
        <div className='Header'>
            <div className='Logo'>
                <img src={devFilmsLogo} className="logo" alt="logo" />
            </div>
            <div className='Buttons'>
                <ButtonHeader text={'Register'} bgColor={colorButons[1]} borderColor={colorButons[0]} />
                <ButtonHeader text={'Login'} bgColor={colorButons[0]} borderColor={colorButons[0]} />
            </div>
        </div>
    )
}

export default Header