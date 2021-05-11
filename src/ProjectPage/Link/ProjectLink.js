import './ProjectLink.css'
import { Link } from 'react-router-dom'
import React from 'react'


export default function ProjectLink({left, link}) {


    return (
        <Link className={left ? "project-link row-reverse" : "project-link flex-end"} to={link[0]} style={left ? {left: '5%',
            top: '90px'} : {right: '5%', top: '90px'}}>
            <p>{link[1]}</p>   
            <div className={"icon-container"} style={left ? {justifyContent: 'flex-start'} : {justifyContent: 'flex-end'}}>
                <i className={left ? "fa fa-arrow-left slider-icon" : "fa fa-arrow-right slider-icon"}></i>
            </div>
        </Link>
    )
}