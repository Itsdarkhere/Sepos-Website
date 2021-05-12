import './Company.css'
import React from 'react'

export default function Company({ companyObject }) {

    return (
        <div className="company-container" >
            <img loading="lazy" src={process.env.PUBLIC_URL + '/pics-highres' + companyObject.image} alt="company"
            className="company-bg-image"></img> 
            <div className="company-text">
                <div className="company-name-container">
                    <p>{companyObject.name}</p>
                </div>
                <div className="company-text-inner">
                    <p className="company-desc">{companyObject.description}</p>   
                </div>
                <div className="company-button-container">
                    <a className="company-button" href={companyObject.website}>
                        <p className="company-link">{companyObject.displayWebsite}</p>
                     </a>
                </div>
            </div>    
        </div>
    )
}