import './ProjectLink.css'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import React from 'react'


export default function ProjectLink({left, link}) {


    return (
        <Link className={left ? "project-link row-reverse" : "project-link flex-end"} to={link[0]} style={left ? {left: '2%',
            top: '5%'} : {right: '2%', top: '5%'}}>
            <p>{link[1]}</p>   
            <div className={"icon-container"} style={left ? {justifyContent: 'flex-start'} : {justifyContent: 'flex-end'}}>
                {left ? <MdKeyboardArrowLeft className="next-icon"/> : <MdKeyboardArrowRight className="next-icon"/>}
            </div>
        </Link>
    )
}