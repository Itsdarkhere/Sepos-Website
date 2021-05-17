import './ProjectSlider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss';

import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { useAnimation, motion } from 'framer-motion'
import React from 'react'

export default function ProjectSlider({ projectArray }) {

    //changing this removes blinking arrow, only visible anyways under 500px
    const [swiped, setSwiped] = useState(false);

    //these and the if handle on scroll animations
    const {ref, inView } = useInView();
    const [triggered, setTriggered] = useState(false);
    const controls = useAnimation();

    if (inView && !triggered) {
        setTriggered(true);
        controls.start({
            opacity: [0, 1]
        })
    }
    

    return (
        <div className="project-slider-outer-container">
            <div className="project-slider-container" id="projects">
                <motion.div animate={controls} className="slider-header">
                    <p ref={ref}>Kiinteistökehitys</p>
                </motion.div>
                <div className="swiper-button-left color-target">
                    <i class="fas fa-chevron-left fa-2x"></i>
                </div>
                <div className="swiper-button-right color-target">
                    <i class="fas fa-chevron-right fa-2x"></i>
                </div>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={4}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-button-right',
                        prevEl: '.swiper-button-left',
                    }}
                    className="project-swiper"
                    slidesPerGroup="4"
                    speed="1000ms"
                    breakpoints={{
                        "1300": {
                        "slidesPerView": 4,
                        "slidesPerGroup": 4,
                        "spaceBetween": 10
                        },
                        "900": {
                        "slidesPerView": 3,
                        "slidesPerGroup": 3,
                        "spaceBetween": 10
                        },
                        "600": {
                        "slidesPerView": 2,
                        "slidesPerGroup": 2,
                        "spaceBetween": 10
                        },
                        "000": {
                            "slidesPerView": 1,
                            "slidesPerGroup": 1,
                            "spaceBetween": 10
                        }
                    }}>
                        {projectArray.map((project, index) => {
                            return (
                                <SwiperSlide className="slider-img-holder" key={index}>
                                    <div className="project-wrapper">
                                        <img className='slider-image'
                                        src={process.env.PUBLIC_URL + './pics-highres/' + index + '.png'} 
                                        alt="project-pic"></img>
                                        <Link className="slider-link" to={project.projectPage}></Link>
                                    </div>
                                    <div className="slider-text">
                                        <p className="slider-project-name">{project.name}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
            </div>
        </div>
    )
}
