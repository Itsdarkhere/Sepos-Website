import './EntryView.css'
import { motion } from 'framer-motion';
import smaller from '../entry-300.png'  
import small from '../entry-600.png'  
import medium from '../entry-1000.png'  
import big from '../entry-1500.png'  
import bigger from '../entry-2000.png'  
import { useResizeDetector } from 'react-resize-detector';
import React from 'react'

export default function LandingPage({ showMainPage }) {

    const { width, ref } = useResizeDetector();


    // Resizing does not update the image src with the srcSet, so this solves that problem
    // And thats a problem since the picture completely changes aspect ratio wise under 600px
    const getImage = () => {
        if (width < 600) {
            return (
                <img id="entry-image" onLoad={() => showMainPage(true)}
                srcSet={`${smaller} 300w, ${small} 600w,`}
                src={smaller} className="entry-image" alt="wide-project-img"></img> 
            )
        } 
        return (
            <img id="entry-image" onLoad={() => showMainPage(true)}
            srcSet={`${medium} 1000w, ${big} 1500w, ${bigger} 2000w,`}
            src={medium} className="entry-image" alt="wide-project-img"></img> 
        )
    }


    return (
        <div className="entry-view-outer-container" ref={ref}>
            {getImage()}
            <div className="entry-view-inner-container">
                <div className="line"> 
                    <motion.p animate={{opacity: [0, 1]}} transition={{duration: 2}}>Kaupunkikehityskohteita Helsingissä, Turussa, Jyväskylässä ja Hämeenlinnassa.</motion.p>
                </div> 
                <div className="entry-view-description">
                    <p>Sepos Oy on vuonna 2014 perustettu Timo Everin, 
                        Ilkka Kilpimaan ja Taaleri Sijoitus Oy:n omistama yritys, 
                        jonka toimialana on kiinteistökehitys ja sijoittaminen aktiivisen elämäntavan 
                        arvoketjussa toimiviin yrityksiin.
                    </p>
                </div> 
            </div>
        </div>
    )   
}