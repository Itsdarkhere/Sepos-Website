import './Companies.css'
import Company from './Company.js'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import React from 'react'

export default function Companies({ companyArray }) {


    const [triggered, setTriggered] = useState(true);
    const controls = useAnimation();
    const { ref, inView } = useInView()

    if (inView && triggered) {
        setTriggered(false)
        controls.start({
            opacity: [0, 1]
        })
    }


    return (
        <div className="companies-outer-container" id="companies">
            <motion.div className="companies-text" animate={controls} transition={{duration: 1}} ref={ref}>           
                <div className="companies-text-header">Osakkuusyhtiöt</div>
            </motion.div>
            <div className="companies-container">
                {companyArray.map((company, index) => {
                    return (
                        <Company companyObject={company} key={index}/>
                    )
                })}
            </div>
        </div>
    )
}