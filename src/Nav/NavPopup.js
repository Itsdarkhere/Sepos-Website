import './NavPopup.css'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import { ProjectArray } from '../Arrays/Arrays' 
import React from 'react'

export default function NavPopup({popupOpen, activatePopup}) {

    const projectArray = ProjectArray()

    //if popup is open when resize happens and component mounts, this closes it
    useEffect(() => {
        if (popupOpen) {
            activatePopup()
        }
    }, [])
    
    const variants = {
        open : {
            opacity: 1,
            x: 0,
        },
        closed: {
            opacity: 0,
            x: '100%',
        }
    }
    const contentVariants = {
        open : {
            opacity: 1,
            transition : {
                delay: 1
            }
        },
        closed: {
            opacity: 0,
        }
    }


    return (
        <motion.div className="overlay" initial='closed' variants={variants} animate={popupOpen ? 'open' : 'closed'} transition={{duration: 1}}>
                <motion.div className="popup-nav-container">
                    <motion.div className="projects-navigation" variants={contentVariants} animate={popupOpen ? 'open' : 'closed'}>
                        <HashLink smooth to="/#companies" className="popup-link" style={{borderBottom: "1px solid rgb(255, 139, 6)"}}>Osakkuusyhtiöt</HashLink>
                        <HashLink smooth to="/#contact" className="popup-link" style={{borderBottom: "1px solid rgb(255, 139, 6)"}}>Yhteystiedot</HashLink>
                        <HashLink smooth to="/#projects" className="popup-link">Kiinteistökehitys</HashLink>
                        <div className="individual-project-link-container">
                            {projectArray.map((project, index) => {
                                return (
                                    <Link key={index} to={project.projectPage} className="popup-project-link">{project.name}</Link>
                                )
                            })}
                        </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}