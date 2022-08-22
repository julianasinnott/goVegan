import '../../../global.css'
import './index.css'
import './responsive.css'
import { ModalContact } from "../ModalContact/index";
import idealizer1 from '/assets/idealizer-1.png'
import idealizer2 from '/assets/idealizer-2.png'
import idealizer3 from '/assets/idealizer-3.png'
import idealizer4 from '/assets/idealizer-4.png'
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
              <img className="idealizers-img" src={idealizer1} alt="" />
              <img className="idealizers-img" src={idealizer2} alt="" />
              <img className="idealizers-img" src={idealizer3} alt="" />
              <img className="idealizers-img" src={idealizer4} alt="" />
            </div>
          </>
        )}
      </section>
      <div className="footer__logo">
        <img className="footer__logo-img" src="/assets/green-logo.png" alt="" />
        <p className="footer__copyright">
          © Copyright - GoVegan
        </p>
      </div>
    </footer>
  )
}