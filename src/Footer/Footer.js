import './Footer.css'
import React from 'react'

export default function Footer() {

    return (
        <footer className="bottom-outer-container">
            <div className="bottom-inner-container">
                <button className="footer-logo-button" onClick={() => window.scrollTo(0, 0)}>
                    <p>SEPOS OY</p>
                </button>
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