import './ImagePopup.css'
import Modal from 'react-modal'
import { disableBodyScroll, enableBodyScroll  } from 'body-scroll-lock'
import React from 'react'
import SwiperCore, { Navigation, Lazy } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css';
import 'swiper/components/lazy/lazy.min.css'
import 'swiper/components/navigation/navigation.min.css';
SwiperCore.use([Navigation, Lazy])

export default function ImagePopup({popupOpen, activatePopup, arrayObject, index}) {

    // For some reason nothing else was working.... I dont know, but it works so.
    const targetElement = document.getRootNode()

    //Locks scroll
    const bodyScrollLock = () => {
        if (popupOpen) {
            disableBodyScroll(targetElement);
        } else {
            enableBodyScroll(targetElement);
        }
    }

    //I have no idea why this needs to be set
    Modal.setAppElement('#root')

    return (
        <div id="modal-container">
            <Modal
            isOpen={popupOpen}
            onAfterOpen={bodyScrollLock()}
            onAfterClose={bodyScrollLock()}
            overlayClassName="modal-container"
            id="image-modal"
            className="modal">
                <div className="image-loader"></div>
                <button className="close-button" onClick={() => activatePopup()} aria-label="Close Image Popup">
                    <i className="fas fa-times fa-2x"></i>
                </button>
                <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                initialSlide={index}
                navigation
                className="modal-swiper"
                preloadImages={false}
                lazy={true}
                >
                    {arrayObject.hqPictures.map((src, index) => {
                        return (
                            <SwiperSlide className="modal-slide swiper-slide swiper-lazy" key={index}>
                                <img className='popup-gallery-image swiper-lazy'
                                data-src={process.env.PUBLIC_URL + './pics-highres' + src}></img>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Modal>
        </div>
    )
}