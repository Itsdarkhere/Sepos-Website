import './ImagePopup.css'
import Modal from 'react-modal'
import { disableBodyScroll, enableBodyScroll  } from 'body-scroll-lock'
import React from 'react'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.min.css';
SwiperCore.use([Navigation])

export default function ImagePopup({popupOpen, activatePopup, arrayObject, index}) {

    //Locks scroll
    const bodyScrollLock = () => {
        if (popupOpen) {
            disableBodyScroll(document.getElementById('modal-container'));
        } else {
            enableBodyScroll(document.getElementById('modal-container'));
        }
    }


    //I have no idea why this needs to be set
    Modal.setAppElement('#root')


    return (
        <div id="modal-container">
            <Modal
            isOpen={popupOpen}
            onAfterOpen={bodyScrollLock()}
            onRequestClose={activatePopup}
            onAfterClose={bodyScrollLock()}
            overlayClassName="modal-container"
            className="modal" >
                <div className="close-button" onClick={() => activatePopup()}>
                    <i class="fas fa-times fa-2x"></i>
                </div>
                <Swiper
                spaceBetween={100}
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
                            <SwiperSlide className="modal-slide swiper-slide" key={index}>
                                <img className='popup-gallery-image swiper-lazy'
                                src={process.env.PUBLIC_URL + './pics-highres' + src}
                                alt="project-pic"></img>
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Modal>
        </div>
    )
}