import './Nav.css'
import { Link } from 'react-router-dom'
import StringNav from './StringNav.js'
import { useResizeDetector } from 'react-resize-detector'
import NavPopup from './NavPopup.js'
import { useState } from 'react'
import React from 'react'

export default function Nav() {

    const { width, ref } = useResizeDetector()

    const [popupOpen, setPopupOpen] = useState(false);

    //opening pop up both opens it and gives the index of the array that contains the info for the popup
    const activatePopup = () => {
        if (popupOpen) {
            setPopupOpen(false);
        } else {
            setPopupOpen(true);
        }
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }


    //Chooses between burger and string menu based on width
    const getNav = () => {
        if (width < 950) {
            return (    
                    <button className="hamburger" onClick={() => activatePopup()}>  
                        <i className="fas fa-bars fa-2x burger-icon"></i>
                        <NavPopup popupOpen={popupOpen} activatePopup={activatePopup}/>
                    </button>
                )
        } else {
            return  (  
                    <StringNav/>
                )
        }    
    }

    return (
        <div className="navbar-container" id="navbar" ref={ref}>
            <Link className="navbar-header" to="/" onClick={() => scrollToTop()}>SEPOS OY</Link>
            <div className="navbar-button-container">
                {getNav()}
            </div>
        </div>
    )
}