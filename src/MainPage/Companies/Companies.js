import './Companies.css'
import Company from './Company.js'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import React from 'react'

export default function Companies({ refO, companyArray }) {


    const [triggered, setTriggered] = useState(true);
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0,
    })


    if (inView && triggered) {
        setTriggered(false)
        controls.start({
            opacity: [0, 1]
        })
    }


    return (
        <div className="companies-outer-container" id="companies">
            <div className="companies-text" >
                <div className="companies-text-header-container">
                    <motion.p className="companies-text-header" ref={ref} animate={controls}>Osakkuusyhtiöt</motion.p>
                </div>
            </div>
            <div className="companies-container" ref={refO}>
                {companyArray.map((company, index) => {
                    return (
                        <Company companyObject={company} key={index}/>
                    )
                })}
            </div>
        </div>
    )
}