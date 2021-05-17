import './Gallery.css'
import { motion } from 'framer-motion'
import React from 'react'

export default function Gallery({activatePopup, arrayObject, setIndex}) {

    return (
        <div className="direction-container">
            <div className="pp-gallery" onClick={() => activatePopup()}>
                {arrayObject.pictures.map((src, index) => {
                    return (
                        <motion.img loading="eager" src={process.env.PUBLIC_URL + './pics' + src} alt="project"
                        className="gallery-image" onMouseEnter={() => setIndex(index)} 
                        animate={{opacity: [0, 1]}} transition={{duration: 2}} key={src}></motion.img>
                    )
                })}
            </div>
        </div>
    )
}