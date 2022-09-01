import '../../../global.css'
import './index.css'
import './responsive.css'
import { ModalContact } from "../ModalContact/index";
import juliana from '../../assets/images/Juliana.png'
import lavinia from '../../assets/images/Lavinia.jpg'
import edilson from '../../assets/images/Edilson.jpg'
import dh from '../../assets/images/DH.png'
import ifood from '../../assets/images/ifood.png'
import React from 'react';

export function Footer({
  hasIdealizers = true
}) {
  const [showModal, setShowModal] = React.useState(false);
  const handleModal = () => {
    setShowModal(true)
  }

  return (
    <footer className="footer">
      <section className="footer__idealizers-section">
        {hasIdealizers && (
          <>
            <div className="footer__top">
              <p className="footer__idealizers-title">IDEALIZADORES</p>
              <p className="footer__idealizers-title">COLABORADORES</p>
              <div className='footer__contact'>
                <button className="contact-btn purple-btn" onClick={() => handleModal()} >
                  FALE CONOSCO
                </button>
                {showModal && <ModalContact setShowModal={setShowModal} />}
              </div>
            </div>
            <div className='aling'>
              <div className="footer__idealizers-section__imgs">
                <a href="https://www.linkedin.com/in/julianasinnott/" target="_blank" rel="noopener noreferrer">
                  <img className="idealizers-img" src={juliana} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/larissa-lav%C3%ADnia-4282aa238/" target="_blank" rel="noopener noreferrer">
                <img className="idealizers-img" src={lavinia} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/edilson-santos-982338234/" target="_blank" rel="noopener noreferrer">
                  <img className="idealizers-img" src={edilson} alt="" />
                  </a>
              </div>
              <div >
                <a href="https://www.linkedin.com/company/ifood-/" target="_blank" rel="noopener noreferrer">
                  <img className="idealizers-img" src={ifood} alt="" />
                </a>
                <a href="https://www.linkedin.com/school/digital-house-brasil/" target="_blank" rel="noopener noreferrer">
                  <img className="idealizers-img" src={dh} alt="" />
                </a>
              </div>
            </div>
          </>
        )}
      </section>
      <div className="footer__logo">
        <img className="footer__logo-img" src="/assets/green-logo.png" alt="" />
        <p className="footer__copyright">
          © Copyright 2022 - GoVegan
        </p>
      </div>
    </footer>
  )
}