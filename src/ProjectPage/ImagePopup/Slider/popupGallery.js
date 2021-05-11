import { useEffect } from 'react'
import PhotoIndicator from './photoIndicator';
import './popupGallery.css'
import { motion } from 'framer-motion'
import React from 'react'

export default function PopupGallery({arrayObject, index, setIndex}) {

    
    //on prop/array change brings index to 0
    //MIGHT HAVE TO BE ACTIVATED IF PROBLEMS ARISE
    useEffect(() => {
        //console.log(index + 'set to 0');
       // setIndex(0);
    }, [arrayObject])

    const forward = () => {
        if (index + 1 >= arrayObject.pictures.length) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }
      
    const backward = () => {
        if (index - 1 < 0) {
            setIndex(arrayObject.pictures.length -1);
        } else {
            setIndex(index - 1);
        }
    }


    return (
        <div className="popup-gallery-big-container">
            <button className={'gallery-button-left left-btn-out'} 
            onClick={() => backward()}>
                <i className="fa fa-chevron-right fa-2x icon"></i>
            </button>
            <motion.img initial={{x: [-100, 0], opacity: [0, 1]}} exit={{x: [0, 100], opacity: [1, 0]}} key={index} className={'popup-gallery-image'}
                src={process.env.PUBLIC_URL + './pics-highres' + arrayObject.hqPictures[index]} 
                alt="project-pic"></motion.img>
            <button className={"gallery-button-right right-btn-out"} 
            onClick={() => forward()}>
                <i className="fa fa-chevron-right fa-2x icon"></i>
            </button>
            <PhotoIndicator index={index} arrayObject={arrayObject}/>
        </div>
    )
}