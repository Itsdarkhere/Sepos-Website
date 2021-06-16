import './BigImage.css'
import { useResizeDetector } from 'react-resize-detector'
import React from 'react'

export default function BigImage({projectIndex, setImgLoaded}) {

    const { width, ref } = useResizeDetector()


    const getPicture = () => {
        if (width < 600) {
            return ( <img src={process.env.PUBLIC_URL + './pics-highres/tall-dark-' + projectIndex + '.png'} onLoad={() => setImgLoaded(true)} className="big-image" alt="wide-project-img"></img> )
        }
        return ( 
            <img className="big-image" onLoad={() => setImgLoaded(true)}
            src={process.env.PUBLIC_URL + './pics-highres/wide-dark-' + projectIndex + '.png'} 
            key={projectIndex} alt="wide-project"></img> 
        )
    }


    return (
        <div className="big-image-container" ref={ref}>
            {getPicture()}
        </div>
    )
}