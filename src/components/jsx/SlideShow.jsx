import React, { useEffect, useRef } from 'react'
import './../css/SlideShow.css'
import Slide from './Slide'

import slides from './../../json/Slides.json'

import img1 from './../../assets/img/SliderImg/Ambulance.jpg'
import img2 from './../../assets/img/SliderImg/elvis.jpg'
import img3 from './../../assets/img/SliderImg/North man.jpg'
import img4 from './../../assets/img/SliderImg/TheBlackPhone.jpg'
import img5 from './../../assets/img/SliderImg/Veneciafrenia.jpg'

import ArrowLeft from './../../assets/img/SliderImg/iconmonstr-angel-left-thin.svg'
import ArrowRight from './../../assets/img/SliderImg/iconmonstr-angel-right-thin.svg'


const SlideShow = () => {
    const slideshow = useRef(null)
    const interval = useRef(null)

    const btRigth = {
        right: '0'
    }

    const next = () => {
        if (slideshow.current.children.length > 0) {
            const firstElement = slideshow.current.children[0]
            slideshow.current.style.transition = `1000ms ease-out all`

            const sizeSlide = slideshow.current.children[0].offsetWidth
            slideshow.current.style.transform = `translateX(-${sizeSlide}px)`

            const transition = () => {
                slideshow.current.style.transition = `none`
                slideshow.current.style.transform = `translateX(0)`

                slideshow.current.appendChild(firstElement)
                slideshow.current.removeEventListener('transitionend', transition)
            }
            slideshow.current.addEventListener('transitionend', transition)
        }
    }

    const previus = () => {
        if (slideshow.current.children.length > 0) {
            const lastIndex = slideshow.current.children.length - 1
            const lastElement = slideshow.current.children[lastIndex]

            slideshow.current.insertBefore(lastElement, slideshow.current.firstChild)
            slideshow.current.style.transition = `none`

            const sizeSlide = slideshow.current.children[0].offsetWidth
            slideshow.current.style.transform = `translateX(-${sizeSlide}px)`

            setTimeout(() => {
                slideshow.current.style.transition = `1000ms ease-out all`
                slideshow.current.style.transform = `translateX(0)`
            }, 30)
        }
    }

    useEffect(() => {
        interval.current = setInterval(() => {
            next()
        }, 5000)

        slideshow.current.addEventListener('mouseenter', () => {
            clearInterval(interval.current)
        })

        slideshow.current.addEventListener('mouseleave', ()=>{
            interval.current = setInterval(() =>{
                next()
            }, 5000)
        })
    }, [])

    return (
        <section className='MainContainer'>
            <div className='ContainerSlides' ref={slideshow}>
                <Slide slide={slides[0]} img={img1} />
                <Slide slide={slides[1]} img={img2} />
                <Slide slide={slides[2]} img={img3} />
                <Slide slide={slides[3]} img={img4} />
                <Slide slide={slides[4]} img={img5} />

            </div>
            <div className='Controls'>
                <button className='btSlider' onClick={previus}>
                    <img src={ArrowLeft} alt="" />
                </button>
                <button className='btSlider' style={btRigth} onClick={next}>
                    <img src={ArrowRight} alt="" />
                </button>
            </div>
        </section>
    )
}

export default SlideShow