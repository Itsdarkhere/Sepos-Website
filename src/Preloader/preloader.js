import './preloader.css'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Modal from 'react-modal'
import React from 'react'

export default function Preloader({loaded}) {

    // This component creates the preloader animation, you pass a prop 'loaded'
    // that is a boolean value that tells if an image has been loaded, if it has been loaded, 
    // the preloader goes away

    // For some reason nothing else was working.... I dont know, but it works so.
    const targetElement = document.querySelector('body')

    // Locks/opens scroll, having one function to do both did not work for somereason on this
    // component
    const lockScroll = () => {
        disableBodyScroll(targetElement);
    }
    const enableScroll = () => {
        enableBodyScroll(targetElement);
    }

    //I have no idea why this needs to be set
    Modal.setAppElement('#root')

    return (
        <div id="loader-container">
            <Modal
                isOpen={!loaded}
                onAfterOpen={lockScroll()}
                onAfterClose={enableScroll()}
                overlayClassName="loader-container"
                id="preloader-modal"
                className="preloader-modal" >
                    <div className="loader"></div>
            </Modal>
        </div>
    )
}