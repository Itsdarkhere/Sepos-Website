import './NavPopup.css'
import { motion } from 'framer-motion'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import { ProjectArray } from '../Arrays/Arrays' 
import Modal from 'react-modal'
import { disableBodyScroll, enableBodyScroll  } from 'body-scroll-lock'
import React from 'react'

export default function NavPopup({ popupOpen }) {

    const projectArray = ProjectArray()

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

    const targetElement = document.querySelector('#App')

    const bodyScrollLock = () => {
        if (popupOpen) {
            disableBodyScroll(targetElement);
        } else {
            enableBodyScroll(targetElement);
        }
    }

    //I have no idea why this needs to be set
    Modal.setAppElement('#root')


    return (
        <motion.div className="nav-modal-overlay" id="nav-modal-overlay" style={popupOpen ? {display: 'flex'} : {display: 'none'}}>
            <Modal
                isOpen={popupOpen}
                onAfterOpen={bodyScrollLock()}
                onAfterClose={bodyScrollLock()}
                overlayClassName="nav-modal-overlay"
                className="nav-modal">
                <motion.div className="animated-overlay" id="modal-overlay" initial='closed' variants={variants} animate={popupOpen ? 'open' : 'closed'} transition={{duration: 1}}>
                        <motion.div className="projects-navigation" variants={contentVariants} animate={popupOpen ? 'open' : 'closed'}>
                            <HashLink smooth to="/#projects" className="popup-link">Kiinteistökehitys</HashLink>
                            <div className="individual-project-link-container">
                                {projectArray.map((project, index) => {
                                    return (
                                        <Link key={index} to={project.projectPage} className="popup-project-link">{project.name}</Link>
                                    )
                                })}
                            </div>
                            <div className="popup-spacer"></div>
                            <HashLink smooth to="/#companies" className="popup-link">Osakkuusyhtiöt</HashLink>
                            <HashLink smooth to="/#contact" className="popup-link">Yhteystiedot</HashLink>
                        </motion.div>
                </motion.div>
            </Modal>
        </motion.div>
    )
}