import './Footer.css'
import { HashLink } from 'react-router-hash-link'
import React from 'react'

export default function Footer() {

    return (
        <footer className="bottom-outer-container">
            <div className="bottom-inner-container">
                <div className="footer-nav">
                    <HashLink smooth to="/#projects" className="footer-nav-button">
                        Projektit
                    </HashLink>
                    <HashLink smooth to="/#companies" className="footer-nav-button">
                        Osakkuusyhtiöt
                    </HashLink>
                    <HashLink smooth to="/#contact" className="footer-nav-button">
                        Ota Yhteyttä
                    </HashLink> 
                </div>
                <div className="policy-info">
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                </div>
                <div className="footer-tag ">
                    <p>®BeFound Web Design</p>
                </div>
            </div>
        </footer>
    )
}