import './ProjectSlider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { useAnimation, motion } from 'framer-motion'
import {GrNext, GrPrevious} from 'react-icons/gr'
import React from 'react'
SwiperCore.use([Pagination])
export default function ProjectSlider({ projectArray }) {

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
                    <div className="slider-header-inner" ref={ref}>
                        Kiinteistökehitys
                    </div>
                </motion.div>
                <div className="swiper-button-left scale-button">
                    <GrPrevious/>
                </div>
                <div className="swiper-button-right scale-button">
                    <GrNext/>
                </div>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={4}
                    direction={'horizontal'}
                    loop={true}
                    slidesPerColumnFill={1}
                    navigation={{
                        nextEl: '.swiper-button-right',
                        prevEl: '.swiper-button-left',
                    }}
                    className="project-swiper"
                    slidesPerGroup="4"
                    speed="1000ms"
                    pagination={{clickable: true}}
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
                                <SwiperSlide className="swiper-slide" key={index}>
                                    <div className="project-wrapper">
                                        <img className='slider-image'
                                        src={process.env.PUBLIC_URL + './pics-highres/' + index + '.png'} 
                                        alt="project-pic"></img>
                                        <Link className="slider-link" to={project.projectPage}></Link>
                                    </div>
                                    <div className="slider-text">
                                        <p className="slider-project-name">{project.name}</p>
                                    </div>
                                    <div className="spacer"></div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
            </div>
        </div>
    )
}