import './index.css';

import iconClose from '../../assets/images/icon-close.png';
import iconOk from '../../assets/images/icon-ok.png';
import logoGoVegan from '../../assets/images/logo-go-vegan.png';

export function ModalSuccess() {
  return (
    <section className='container'>
      <section className='modal-success'>
        <section className='close-modal' >
          <section className='close-modal-icon' >
            <img className='icon__close' src={iconClose} alt="" />
          </section>
        </section>
        <section className='success__container' >
          <h1 className='title-success' >MENSAGEM ENVIADA<br /> COM SUCESSO</h1>
          <section className='background-image-ok'>
            <img className='icon-ok' src={iconOk} alt="" />
          </section>
          <h2 className='subtitle-success' >Obrigado pelo contato!</h2>
          <section className='go-vegan-container' >
            <img className='logo-go-vegan' src={logoGoVegan} alt="" />
          </section>
        </section>
      </section>
    </section>
  );
};