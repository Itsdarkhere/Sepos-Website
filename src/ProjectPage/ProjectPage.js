import './ProjectPage.css'
import BigImage from './BigImage/BigImage.js'
import Link from './Link/ProjectLink.js'
import Gallery from './Gallery/Gallery.js'
import Text from './Text/Text.js'
import Footer from '../Footer/Footer.js'
import ImagePopup from './ImagePopup/ImagePopup.js'
import React, { useEffect, useState } from 'react'

export default function ProjectPage({ arrayObject, contactsInView, projectIndex }) {

    const [popupOpen, setPopupOpen] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    //opening pop up both opens it and gives the index of the array that contains the info for the popup
    const activatePopup = () => {
        if (popupOpen) {
        setPopupOpen(false);
        } else {
        setPopupOpen(true);
        }
    }
    const setPictureIndex = (propIndex) => {
        setIndex(propIndex);
    }


    return (
        <div className="project-page-container">
            <div className="pp-spacer"></div>
            <ImagePopup popupOpen={popupOpen} activatePopup={activatePopup} arrayObject={arrayObject} index={index} />
            <div className="pp-top-container">
                <BigImage activatePopup={activatePopup} setIndex={setPictureIndex} projectIndex={projectIndex}/>
                <Link left={true} link={arrayObject.previousProject}/>
                <Link left={false} link={arrayObject.nextProject}/>
            </div>
            <div className="pp-bottom-container">
                <Text arrayObject={arrayObject}/>
                <Gallery activatePopup={activatePopup} arrayObject={arrayObject} setIndex={setPictureIndex}/>
            </div>
            <div className="pp-spacer"></div>
            <Footer contactsInView={contactsInView}/>
        </div>
    )
}