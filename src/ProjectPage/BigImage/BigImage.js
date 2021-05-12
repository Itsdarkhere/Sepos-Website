import './BigImage.css'
import { motion } from 'framer-motion'
import React from 'react'

export default function BigImage({activatePopup, setIndex, projectIndex}) {

    return (
        <div className="big-image-container" onClick={() => activatePopup()}>
            <motion.img alt="project-wide" className="big-image" 
            src={process.env.PUBLIC_URL + './pics-highres/wide' + projectIndex + ".png"} 
            onMouseEnter={() => setIndex(0)} key={projectIndex} animate={{opacity: [0, 1]}} transition={{duration: 2}}></motion.img>
        </div>
    )
}