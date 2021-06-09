import './MainPage.css'
import EntryView from './EntryView/EntryView.js'
import ProjectSlider from './ProjectSlider/ProjectSlider.js'
import Companies from './Companies/Companies.js'
import Contacts from './Contacts/Contacts.js'
import { ProjectArray, CompanyArray } from '../Arrays/Arrays'
import React, { useState } from 'react'
import Footer from '../Footer/Footer.js'

export default function MainPage() {

    const [loaded, setLoaded] = useState(false)

    const showMainpage = (bool) => {
        setLoaded(bool)
    }

    const projectArray = ProjectArray();
    const companyArray = CompanyArray()


    return (
        <div className="main-page-container">
            <div className="main-loader-container" style={loaded ? {display: 'none'} : {display: 'flex'}}>
                <div className="main-loader"></div>
            </div>    
            <div className="entry-spacer"></div>
            <EntryView showMainpage={showMainpage}/>
            <ProjectSlider projectArray={projectArray}/>
            <Companies companyArray={companyArray}/>
            <Contacts/>
            <Footer/>
        </div>
    )
}