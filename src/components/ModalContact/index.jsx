import './index.css';
import './responsive.css';

import iconClose from '../../assets/images/icon-close.png';
import * as React from 'react';

export function ModalContact(props) {

  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    mensagem: ''
});

const [erro, setErro] = React.useState("")

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  });

}
const handleSubmit = (e) => {
  e.preventDefault();

  if(!validate()) return;

  const saveForm = true;
  
  if (saveForm) {
    console.log("enviado")
    console.log(form)
    };
}

function validate() {
  if (form.nome > 30) {
    return setErro("Máximo de 30 caracteres.")
  } 
  if(!form.email.includes("@")){
    return setErro("E-mail inválido!")
  }
  if(form.mensagem > 300){
    return setErro("Máximo de 300 caracteres.")
  }

  return true
}

  return (
    <div className='modal-teste'>
      <section className='modal-contact'>
        <section className='close-modal__modal-contact' >
          <section className='close-modal-icon__modal-contact' onClick={() => props.setShowModal(false)} >
            <img className='icon__close__modal-contact' src={iconClose} alt="" />
          </section>
        </section>
        <h1 className='title-contact' >Gostaria de falar<br />com a gente?</h1>
        <form action="https://formsubmit.co/larissa11.cedaspy@gmail.com" method="POST"
        className='form-contact'
        
        >
          <input 
          className='input__modal-contact' 
          placeholder='Deixe seu nome completo'
          required 
          type="text" 
          name="nome"
          value={form.nome}
          pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
          onChange={handleChange}
          />
          <input 
          className='input__modal-contact' 
          placeholder='Deixe seu E-mail'
          required 
          type="text" 
          name="email"
          value={form.email}
          onChange={handleChange}
          />
          <textarea 
          placeholder='Deixe sua mensagem' 
          required
          name="mensagem" 
          className='message__modal-contact'
          value={form.mensagem}
          onChange={handleChange}
           /* cols="30" rows="10" */></textarea>
          <button className='button__modal-contact' type="submit" onSubmit={handleSubmit}>Enviar</button>
          <span className='spanErro'>{erro}</span>
        </form>
      </section>
    </div>
  )
}