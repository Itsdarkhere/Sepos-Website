import './Text.css'
import React from 'react'


export default function Text({ arrayObject }) {

    const getButton = () => {
        if (arrayObject.website !== '') {
            return(
                <a className="website-link" href={arrayObject.website}>{arrayObject.websiteLinkName}</a>
            )
        }
    }

    return (
        <div className="text-outer-container">
            <div className="text-name-container">
                <p>{arrayObject.name}</p>
            </div>
            <div className="text-inner-container">
                <div className="text-desc-container">
                    <p className="text-description">{arrayObject.description}</p>
                </div>
                <div className="text-button-facts-container">
                    <div className="text-website-link">
                        {getButton()}
                    </div>
                    <div className="text-facts">
                        {arrayObject.facts.map((fact, index) => {
                            return (
                                <li key={index} className="text-fact">{fact}</li>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}