import './Person.css'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import React from 'react'

export default function Person({image, name, title, phone, email}) {

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
        <motion.div className="person-container" ref={ref} animate={controls}>
            <div className="person-inner-container">
                <div className="person-image-container">
                    <img src='./pics/pro.jpeg' alt="pic-of-person" className="person-picture"/>
                </div>
                <div className="person-info">
                    <div className="person-name">
                        <p>{name}</p>
                    </div>
                    <div className="person-title">
                        <p>{title}</p>
                    </div>
                    <div className="person-contacts">
                        <div className="person-contact">{phone}</div>
                        <div className="person-contact">{email}</div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}