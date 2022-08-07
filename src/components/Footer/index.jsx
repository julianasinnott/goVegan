import '../../../global.css'
import './index.css'
import idealizer1 from '../../../public/assets/idealizer-1.png'
import idealizer2 from '../../../public/assets/idealizer-2.png'
import idealizer3 from '../../../public/assets/idealizer-3.png'
import idealizer4 from '../../../public/assets/idealizer-4.png'

export function Footer () {
  return(
      <footer class="footer">
        <section class="footer__idealizers-section">
          <div class="footer__top">
            <p class="footer__idealizers-title">IDEALIZADORES</p>
            <button class="contact-btn purple-btn">
              FALE CONOSCO
            </button>        
          </div>
          <div class="footer__idealizers-section__imgs">
            <img class="idealizers-img" src={idealizer1} alt=""/>
            <img class="idealizers-img" src={idealizer2} alt=""/>
            <img class="idealizers-img" src={idealizer3} alt=""/>
            <img class="idealizers-img" src={idealizer4} alt=""/>
          </div>
        </section>
        <div class="footer__logo">
          <img class="footer__logo-img" src="./assets/green-logo.png" alt=""/>
          <p class="footer__copyright">
            © Copyright - GoVegan
          </p>
        </div>
      </footer>
)
}