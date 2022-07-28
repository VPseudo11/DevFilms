import React from 'react'
import './../css/Slide.css'

const Slide = ({ slide, img }) => {
    /* const img = './../../assets/img/SliderImg/Ambulance.jpg' */
    return (
        <div className='Slide'>
            <a href="#">
                <img src={img} alt="" />
            </a>
            <div className='TextContainer'>
                <div className='TextSlide'>
                    <h1 className='titleMovie'>{slide.title}</h1>
                    <p className='gendersMovie'>{slide.gender} / {slide.subgenre}</p>
                    <p className='durationMovie'>{slide.duration}</p>
                    <p className='descriptionMovie'>{slide.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Slide