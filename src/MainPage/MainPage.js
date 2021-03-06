import './MainPage.css'
import EntryView from './EntryView/EntryView.js'
import ProjectSlider from './ProjectSlider/ProjectSlider.js'
import Companies from './Companies/Companies.js'
import Contacts from './Contacts/Contacts.js'
import { ProjectArray, CompanyArray } from '../Arrays/Arrays'
import Preloader from '../Preloader/preloader'
import '../Fonts/Rockwell.css'
import React, { useState } from 'react'
import Footer from '../Footer/Footer.js'

export default function MainPage() {

    const [loaded, setLoaded] = useState(false)

    const showMainPage = (bool) => {
        setLoaded(bool)
    }

    const projectArray = ProjectArray();
    const companyArray = CompanyArray()


    return (
        <div className="main-page-container">
            <Preloader loaded={loaded}/>
            <div className="entry-spacer"></div>
            <EntryView showMainPage={showMainPage}/>
            <ProjectSlider projectArray={projectArray}/>
            <Companies companyArray={companyArray}/>
            <Contacts/>
            <Footer/>
        </div>
    )
}