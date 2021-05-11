import './MainPage.css'
import EntryView from './EntryView/EntryView.js'
import ProjectSlider from './ProjectSlider/ProjectSlider.js'
import Companies from './Companies/Companies.js'
import Contacts from './Contacts/Contacts.js'
import { ProjectArray, CompanyArray } from '../Arrays/Arrays'
import React from 'react'
import Footer from '../Footer/Footer.js'

export default function MainPage({ refs, contactsInView }) {

    const projectArray = ProjectArray();
    const companyArray = CompanyArray()


    return (
        <div className="main-page-container">
            <div className="entry-spacer"></div>
            <EntryView />
            <ProjectSlider refP={refs[0]} projectArray={projectArray}/>
            <Companies refO={refs[1]} companyArray={companyArray}/>
            <Contacts refC={refs[2]}/>
            <Footer contactsInView={contactsInView}/>
        </div>
    )
}