import './ImagePopup.css'
import Modal from 'react-modal'
import { disableBodyScroll, enableBodyScroll  } from 'body-scroll-lock'
import React, { useState } from 'react'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss'
SwiperCore.use([Navigation])

export default function ImagePopup({popupOpen, activatePopup, arrayObject, index}) {

    const [loaded, setLoaded] = useState(false);

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
                className="modal-swiper">
                    {arrayObject.hqPictures.map((src, index) => {
                        return (
                            <SwiperSlide className="modal-slide" key={index}>
                                <img className='popup-gallery-image' onLoadStart={() => setLoaded(false)}
                                onLoad={() => setLoaded(true)}
                                src={process.env.PUBLIC_URL + './pics-highres' + src} 
                                alt="project-pic" style={loaded ? {opacity: 1} : {opacity: 0}}></img>
                                <div class="img-loader" style={loaded ? {display: 'none'} : {display: 'flex'}}></div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Modal>
        </div>
    )
}