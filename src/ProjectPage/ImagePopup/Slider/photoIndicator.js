import './photoIndicator.css'
import React from 'react'

export default function PhotoIndicator({index, arrayObject}) {


    return (
        <div className="popup-photo-indicator">
            <div className="popup-dot-rails">
                {arrayObject.hqPictures.map((photo, i) => {
                    return (
                        <div className={i === index ? "popup-photo-dot dot-selected" : "popup-photo-dot"}
                        id={'dot-' + i} key={'photo-dot-' + i}></div>
                    )
                })}
            </div>
        </div>
    )
}