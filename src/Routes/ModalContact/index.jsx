import './index.css';

import iconClose from '../../assets/images/icon-close.png';

export function ModalContact() {
  return (
    <section className='container'>
      <section className='modal-contact'>
        <section className='close-modal' >
          <section className='close-modal-icon' >
            <img className='icon__close' src={iconClose} alt="" />
          </section>
        </section>
        <h1 className='title-contact' >Gostaria de falar<br />com a gente?</h1>
        <form className='form-contact' action="">
          <input className='input' placeholder='Deixe seu nome completo' type="text" name="" id="" />
          <input className='input' placeholder='Deixe seu E-mail' type="text" name="" id="" />
          <textarea placeholder='Deixe sua mensagem' name="" className='message' /* cols="30" rows="10" */></textarea>
          <button className='button-contact' type="submit">Enviar</button>
        </form>
      </section>
    </section>
  );
};