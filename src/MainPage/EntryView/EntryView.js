import './EntryView.css'
import { motion } from 'framer-motion';
import { useResizeDetector } from 'react-resize-detector'
import React from 'react'

export default function LandingPage() {

    const { width, ref } = useResizeDetector()


    const getVideo = () => {
        if (width < 600) {
            return ( <video type="video/mp4" src="../video/phone-vid.mp4" className="landing-video" autoPlay={true} loop={true} muted/> )
        }
        return ( <video type="video/mp4" src="../video/videoloop.mp4" className="landing-video" autoPlay={true} loop={true} muted/> )
    }


    return (
        <div className="entry-view-outer-container" ref={ref}>
            {getVideo()}
            <div className="entry-view-inner-container">
                    <div className="line"> 
                        <motion.p animate={{opacity: [0, 1]}} transition={{duration: 2}}>2.1 MILJARDIN ARVOISET PROJEKTIT</motion.p>
                    </div>
                    <div className="line">
                        <motion.p animate={{opacity: [0, 1]}} transition={{duration: 3}}>355 MILJOONAA EUROA VEROTULOJA</motion.p>
                    </div>
                    <div className="line">
                        <motion.p animate={{opacity: [0, 1]}} transition={{duration: 4}}>Rakennusaikana 17 000 työpaikkaa Suomeen</motion.p>
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