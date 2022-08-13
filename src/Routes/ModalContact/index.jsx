import './index.css';

import iconClose from '../../assets/images/icon-close.png';

export function ModalContact() {
  return (
    <section className='container__modal-contact'>
      <section className='modal-contact'>
        <section className='close-modal__modal-contact' >
          <section className='close-modal-icon__modal-contact' >
            <img className='icon__close__modal-contact' src={iconClose} alt="" />
          </section>
        </section>
        <h1 className='title-contact' >Gostaria de falar<br />com a gente?</h1>
        <form className='form-contact' action="">
          <input className='input__modal-contact' placeholder='Deixe seu nome completo' type="text" name="" id="" />
          <input className='input__modal-contact' placeholder='Deixe seu E-mail' type="text" name="" id="" />
          <textarea placeholder='Deixe sua mensagem' name="" className='message__modal-contact' /* cols="30" rows="10" */></textarea>
          <button className='button__modal-contact' type="submit">Enviar</button>
        </form>
      </section>
    </section>
  );
};