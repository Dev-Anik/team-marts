import React from 'react';
import { Modal } from 'react-bootstrap';
// Import Swiper React components and required styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const SourcingModal = ({ show, handleClose, heading, details, images=[] }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      id="sourcing-modal"
      dialogClassName='modal-dialog'
    >
      <Modal.Body>
        <div className='row'>
          {/* text part */}
          <div className="col-md-6 modal-body-left">
            <div className="ripple-wrapper mob-only">
              <div className="ripple" onClick={handleClose}><i className="fa-solid fa-xmark"></i></div>
            </div>
            <h2 className="modal-heading">{heading}</h2>
            <p className="modal-text">{details}</p>
          </div>
          {/* swipe image part */}
          <div className="col-md-6 modal-body-right">
            <div className="ripple-wrapper tab-only">
              <div className="ripple" onClick={handleClose}><i className="fa-solid fa-xmark"></i></div>
            </div>
            <Swiper className="swiper mySwiper" modules={[Pagination]} pagination={{clickable:true}}>
                <div className="swiper-wrapper">
                  {images.map((imgUrl,index)=>(
                      <SwiperSlide className='swiper-slide' key={index}>
                        <img src={imgUrl} alt="" className='threeD-img'/>
                      </SwiperSlide>
                    ))
                  }
                </div>
            </Swiper>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SourcingModal;