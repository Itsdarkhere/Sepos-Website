import './EntryView.css'
import { motion } from 'framer-motion';
import { useResizeDetector } from 'react-resize-detector'
import React from 'react'

export default function LandingPage() {

    const { width, ref } = useResizeDetector()


    const getPicture = () => {
        if (width < 600) {
            return ( <img src={process.env.PUBLIC_URL + './pics-highres/tall-pic.png'} className="landing-video" alt="wide-project-img"></img> )
        }
        return ( <img src={process.env.PUBLIC_URL + './pics-highres/garden-wide-still.jpg'} className="landing-video" alt="wide-project-img"></img> )
    }


    return (
        <div className="entry-view-outer-container" ref={ref}>
            {getPicture()}
            <div className="entry-view-inner-container">
                    <div className="line"> 
                        <motion.p animate={{opacity: [0, 1]}} transition={{duration: 2}}>2.1 MILJARDIN ARVOISET PROJEKTIT</motion.p>
                    </div>
                    <div className="line">
                        <motion.p animate={{opacity: [0, 1]}} transition={{duration: 2, delay: 1}}>355 MILJOONAA EUROA VEROTULOJA</motion.p>
                    </div>
                    <div className="line">
                        <motion.p animate={{opacity: [0, 1]}} transition={{duration: 2, delay: 2.5}}>RAKENNUSAIKANA 17 000 TYÖPAIKKAA SUOMEEN</motion.p>
                    </div>
                    <div className="entry-view-description">
                        <p>Sepos Oy on vuonna 2014 perustettu Timo Everin,
                            Ilkka Kilpimaan ja Taaleri Sijoitus Oy:n omistama 
                            yritys, jonka toimialana on kiinteistökehitys ja 
                            sijoittaminen aktiivisen elämäntavan arvoketjussa 
                            toimiviin yrityksiin
                        </p>
                    </div>
                </div>
        </div>
    )   
}