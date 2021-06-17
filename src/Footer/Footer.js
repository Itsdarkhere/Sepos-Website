import './Footer.css'
import React, { useState } from 'react'

export default function Footer() {

    const [policy, togglePolicy] = useState(true)
    const policyToggle = () => {
        togglePolicy(!policy)
    }

    return (
        <footer className="bottom-outer-container">
            <div className="bottom-inner-container">
                <button className="footer-logo-button" onClick={() => window.scrollTo(0, 0)}
                aria-label="Home Button">
                    <p>SEPOS OY</p>
                </button>
                {policy ? 
                <div className="footer-tags-container">
                    <div className="footer-policies" onClick={() => policyToggle()}>
                        <button className="policy" 
                        onClick={() => policyToggle()}>Privacy Policy</button>
                    </div>
                    <div className="footer-befound">@BeFound Web Design</div>
                </div>
                :
                <div className="policy-component">
                    <div className="policy-info">We do not gather, keep or use any of your data.</div>
                    <button className="policy-close" onClick={() => policyToggle()}>Close</button>
                </div>
                }
            </div>
        </footer>
    )
}