import './BigImage.css'
import { useResizeDetector } from 'react-resize-detector'
import React from 'react'

export default function BigImage({activatePopup, setIndex, projectIndex, setImgLoaded}) {

    const { width, ref } = useResizeDetector()


    const getPicture = () => {
        if (width < 600) {
            return ( <img src={process.env.PUBLIC_URL + './pics-highres/tall-dark-' + projectIndex + '.png'} onLoad={() => setImgLoaded(true)} className="big-image" alt="wide-project-img"></img> )
        }
        return ( 
            <img className="big-image" onLoad={() => setImgLoaded(true)}
            src={process.env.PUBLIC_URL + './pics-highres/wide-dark-' + projectIndex + ".png"} 
            onMouseEnter={() => setIndex(0)} key={projectIndex} ></img> 
        )
    }


    return (
        <div className="big-image-container" onClick={() => activatePopup()} ref={ref}>
            {getPicture()}
        </div>
    )
}