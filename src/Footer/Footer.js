import './Footer.css'
import { HashLink } from 'react-router-hash-link'
import React from 'react'

export default function Footer() {

    return (
        <footer className="bottom-outer-container">
            <div className="bottom-inner-container">
                <div className="footer-logo-container">
                    <p>SEPOS OY</p>
                </div>
                <div className="footer-tags-container">
                    <div className="footer-policies">
                        <div className="policy">Privacy Policy</div>
                        <div className="policy">Terms of Use</div>
                    </div>
                    <div className="footer-befound">@BeFound Web Design</div>
                </div>
            </div>
        </footer>
    )
}