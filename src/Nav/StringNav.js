import './StringNav.css'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import { ProjectArray } from '../Arrays/Arrays' 
import React from 'react'

// Loaded is used to kill pointer events while preloader is rolling
export default function StringNav() {

    // From here we can access page and project names
    const projectArray = ProjectArray()

    return (
        <div className="hashlink-button-container" key="hashcont">
            <div className="projects-hashlink-container">
                <HashLink smooth to="/#projects" className="navbar-button-projects">
                    <p>Kiinteistökehitys</p>
                </HashLink>
                <div className="dropdown-menu">
                    {projectArray.map((project, index) => {
                        return (
                            <Link tabIndex="-1" key={index} className="dropdown-link" to={project.projectPage}>{project.name}</Link>
                        )
                    })}
                </div>
            </div>
            <HashLink smooth to="/#companies" className="navbar-button">
                Osakkuusyhtiöt
            </HashLink>
            <HashLink smooth to="/#contact" className="navbar-button">
                Yhteystiedot
            </HashLink>
        </div>  
    )
}