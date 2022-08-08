import '../../../global.css'
import './index.css'
import idealizer1 from '../../../public/assets/idealizer-1.png'
import idealizer2 from '../../../public/assets/idealizer-2.png'
import idealizer3 from '../../../public/assets/idealizer-3.png'
import idealizer4 from '../../../public/assets/idealizer-4.png'

export function Footer () {
  return(
      <footer className="footer">
        <section className="footer__idealizers-section">
          <div className="footer__top">
            <p className="footer__idealizers-title">IDEALIZADORES</p>
            <button className="contact-btn purple-btn">
              FALE CONOSCO
            </button>        
          </div>
          <div className="footer__idealizers-section__imgs">
            <img className="idealizers-img" src={idealizer1} alt=""/>
            <img className="idealizers-img" src={idealizer2} alt=""/>
            <img className="idealizers-img" src={idealizer3} alt=""/>
            <img className="idealizers-img" src={idealizer4} alt=""/>
          </div>
        </section>
        <div className="footer__logo">
          <img className="footer__logo-img" src="./assets/green-logo.png" alt=""/>
          <p className="footer__copyright">
            © Copyright - GoVegan
          </p>
        </div>
      </footer>
)
}