import './Contacts.css'
import Person from './Person.js'
import { useState } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import React from 'react'

export default function PersonContainer() {


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
        <div className="contacts-container"  id="contact">
            <div className="persons-grid">
                <div className="contact-header-container">
                    <motion.div animate={controls} ref={ref} className="contact-header">Yhteystiedot</motion.div>
                </div>
                <Person image="Bean.jpeg" name="Jouni Alho" 
                title="Hallimies-prospekti" phone={'+358 050 305 4104'} 
                email="Jouni.alho@sepos.fi"/>
                <Person image="Bean.jpeg" name="Ilkka Kilpimaa" 
                title="Hallimies" phone={'+358 40 7435223'} 
                email="ilkka.kilpimaa@sepos.fi"/>
                <Person image="Bean.jpeg" name="Timo Everi" 
                title="Hallimies" phone={'+358 40 8600 231'} 
                email="timo.everi@sepos.fi"/>
                <Person image="Bean.jpeg" name="Juha Pajunen" 
                title="Talousjohtaja" phone={'+358 40 744 1272'} 
                email="juha.pajunen@axecon.fi"/>    
                <Person image="Bean.jpeg" name="Robin Lindahl" 
                title="Hallituksen jäsen" phone={'+358 50 595 9616'} 
                email=" robin.lindahl@taaleri.com"/>
                <div className="under-550-spacer"></div>
            </div>
        </div>

    )
}