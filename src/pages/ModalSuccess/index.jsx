import './index.css';

import iconClose from '../../assets/images/icon-close.png';
import iconOk from '../../assets/images/icon-ok.png';
import logoGoVegan from '../../assets/images/logo-go-vegan.png';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export function ModalSuccess(props) {

  const [showModal, setShowModal] = React.useState(true)

  return (
    <section className='container__modal-success'>
      <section className='modal-success'>
        <section className='close-modal__success' >
          <section className='background-icon-close__success' >
            <img className='icon__close__modal-success' src={iconClose} alt="" onClick={() => props.setShowModal(false)} />
          </section>
        </section>
        <section className='success__container' >
          <h1 className='title-success' >MENSAGEM ENVIADA<br /> COM SUCESSO</h1>
          <section className='background-image-ok__modal-success'>
            <img className='icon-ok__modal-success' src={iconOk} alt="" />
          </section>
          <h2 className='subtitle-success' >Obrigado pelo contato!</h2>
          <section className='go-vegan-container__modal-success' >
            <img className='logo-go-vegan__modal-success' src={logoGoVegan} alt="" />
          </section>
        </section>
      </section>
    </section>
  );
};