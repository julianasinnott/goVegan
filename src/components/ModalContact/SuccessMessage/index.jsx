import './index.css';
import iconOk from '../../../assets/images/icon-ok.png'
import logoGoVegan from '../../../assets/images/logo-go-vegan.png';
import * as React from 'react';

export function SuccessMessage() {

  return (
    <section className='success__container' >
      <h1 className='title-success'> MENSAGEM ENVIADA <br/> COM SUCESSO </h1>
      <section className='background-image-ok__modal-success'>
        <img className='icon-ok__modal-success' src={iconOk} alt="" />
      </section>
      <h2 className='subtitle-success' >Obrigado pelo contato!</h2>
      <section className='go-vegan-container__modal-success' >
        <img className='logo-go-vegan__modal-success' src={logoGoVegan} alt="" />
      </section>
    </section>
  );
};