import './ProjectSlider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { useAnimation, motion } from 'framer-motion'
import React from 'react'

export default function ProjectSlider({ refP, projectArray }) {

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
    


    //SWIPER settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: false,
        nextArrow: <div>
                        <div className="next-slick-arrow">
                        <i className="fa fa-chevron-right hover-color"></i>
                        </div>
                    </div>,
        prevArrow: <div>
                        <div className="prev-slick-arrow" ref={refP}>
                            <i className="fa fa-chevron-left hover-color"></i>
                        </div>
                    </div>,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                }
              },
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
              {
                  breakpoint: 800,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                  }
              }
        ]
    };

    const getArrow = () => {
        if (!swiped) {
            return (
                <motion.div className="slider-icon-container" animate={{opacity: [0, 1, 0]}} transition={{repeat: Infinity}}>
                    <i className="fas fa-arrow-right arrow-icon"></i>
                </motion.div>
            ) 
        } else {
            return <div className="slider-icon-container"></div>
        }    
    }


    return (
        <div className="project-slider-container" id="projects">
            <motion.div ref={ref} animate={controls} className="slider-header">
                <p>Kiinteistökehitys</p>
            </motion.div>
            {getArrow()}
            <Slider {...settings} ref={c => (c)} className="slider" onSwipe={() => setSwiped(true)}>
                {projectArray.map((project, index) => {
                    return (
                        <div className="slider-img-holder" key={index}>
                            <div className="project-wrapper">
                                <img loading="lazy" alt={"project" + index} src={process.env.PUBLIC_URL + "./pics-highres/" + index + ".png"} className="slider-image"></img>
                                <Link className="slider-link" to={project.projectPage}></Link>
                            </div>
                            <p className="slider-project-year">{project.finishedIn}</p>
                            <p className="slider-project-name">{project.name}</p>
                         </div>
                    )
                })}
            </Slider>
        </div>
    )
}
