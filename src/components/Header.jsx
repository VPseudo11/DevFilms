import React from 'react'
import ButtonHeader from './ButtonHeader'
import './Header.css'
import SearchBar from './SearchBar'
import Submenu from './Submenu'


const Header = ({ devFilmsLogo }) => {
    const colorButons = ["#6e1c28", 'transparent']
    const genders = ['Action', 'Animation', 'Adventure', 'Science fiction', 'Comedy', 'Documentary film', 'Drama', 'Family', 'Fancy', 'Mystery', 'Musical', 'Romance', 'Terror']
    const movies = ['Premieres', 'More views']
    const series = ['New series', 'New episodes', 'More views']



    return (
        <div className='Header'>
            <div className='Logo'>
                <img src={devFilmsLogo} className="logo" alt="logo" />
            </div>
            <div className='NavBar'>
                <ul className='Options'>
                    <li className='Item'><a href='#'>Home</a></li>
                    <li className='Item'><a href='#'>Genders<i className="fa-solid fa-angle-right"></i></a>
                        <Submenu list={genders} />
                    </li>
                    <li className='Item'><a href='#'>Movies<i className="fa-solid fa-angle-right"></i></a>
                        <Submenu list={movies} />
                    </li>
                    <li className='Item'><a href='#'>Series<i className="fa-solid fa-angle-right"></i></a>
                        <Submenu list={series} />
                    </li>
                </ul>
            </div>
            <div className='Search'>
                <SearchBar />
            </div>
            <div className='Buttons'>
                <ButtonHeader text={'Register'} bgColor={colorButons[1]} borderColor={colorButons[0]} />
                <ButtonHeader text={'Login'} bgColor={colorButons[0]} borderColor={colorButons[0]} />
            </div>
        </div>
    )
}

export default Header