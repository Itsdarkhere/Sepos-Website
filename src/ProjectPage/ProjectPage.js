import './ProjectPage.css'
import BigImage from './BigImage/BigImage.js'
import Link from './Link/ProjectLink.js'
import Gallery from './Gallery/Gallery.js'
import Text from './Text/Text.js'
import Footer from '../Footer/Footer.js'
import Preloader from '../Preloader/preloader'
import ImagePopup from './ImagePopup/ImagePopup.js'
import React, { useEffect, useState } from 'react'

export default function ProjectPage({ arrayObject, projectIndex }) {

    const [popupOpen, setPopupOpen] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);
    const [index, setIndex] = useState(0);


    //Scrolls to start on mount
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

    const getStatusBlock = () => {
        if (arrayObject.status) {
            return (
                <div className="pp-status">
                    <p className="status-p">{ arrayObject.status ? 'Tilanne: ' + arrayObject.status : ''}</p>
                </div>
            )
        }
        return <div className="pp-spacer"></div>
    }

    return (
        <div className="project-page-container">
            <Preloader loaded={imgLoaded}/>
            <ImagePopup popupOpen={popupOpen} activatePopup={activatePopup} arrayObject={arrayObject} index={index} />
            <div className="pp-top-container">  
                <BigImage projectIndex={projectIndex} setImgLoaded={setImgLoaded}/>
                <Link left={true} link={arrayObject.previousProject}/>
                <Link left={false} link={arrayObject.nextProject}/>
                <div className="text-name-container">
                    <p>{arrayObject.name}</p>
                </div>
            </div>
            <div className="pp-bottom-container">
                <Text arrayObject={arrayObject}/>
                <Gallery activatePopup={activatePopup} arrayObject={arrayObject} setIndex={setPictureIndex}/>
            </div>
            {getStatusBlock()}
            <Footer/>   
        </div>
    )
}