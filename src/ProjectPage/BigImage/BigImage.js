import './BigImage.css'
import React from 'react'

export default function BigImage({activatePopup, setIndex, projectIndex}) {

    return (
        <div className="big-image-container" onClick={() => activatePopup()}>
            <img alt="project-wide" className="big-image" src={process.env.PUBLIC_URL + './pics-highres/wide' + projectIndex + ".png"} onMouseEnter={() => setIndex(0)}></img>
        </div>
    )
}