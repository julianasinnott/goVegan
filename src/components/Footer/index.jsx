import '../../../global.css'
import './index.css'
import './responsive.css'
import { ModalContact } from "../ModalContact/index";
import juliana from '../../assets/images/Juliana.png'
import lavinia from '../../assets/images/Lavinia.jpg'
import edilson from '../../assets/images/Edilson.jpg'
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
              <button className="contact-btn purple-btn" onClick={() => handleModal()} >
                FALE CONOSCO
              </button>
              {showModal && <ModalContact setShowModal={setShowModal} />}
            </div>
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