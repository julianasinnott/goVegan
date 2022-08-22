import './index.css';
import './responsive.css';
import iconClose from '../../assets/images/icon-close.png';
import * as React from 'react';
import { useState } from 'react';
import { SuccessMessage } from './SuccessMessage';

export function ModalContact({setShowModal}) {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  const [erro, setErro] = React.useState("")
  const [saveForm, setSaveForm] = useState('')
  const [isFormSend, setIsFormSend] = useState('')

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function formSubmit(data) {
    setIsFormSend(true)
    fetch("https://formsubmit.co/ajax/larissa11.cedaspy@gmail.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(()=> setSaveForm(true))
    .catch(error => console.log(error))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!validate()) return;

    let data = {
      nome: form.nome,
      email: form.email,
      mensagem: form.mensagem
    }

    formSubmit(data)
    setForm("")
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
    <>
      <div className='modal-container'>
        <section className='modal-contact'>
          <section className='close-modal__modal-contact' >
            <section className='close-modal-icon__modal-contact' onClick={() => setShowModal(false)} >
              <img className='icon__close__modal-contact' src={iconClose} alt="" />
            </section>
          </section>
          {
            saveForm ?
              <SuccessMessage />
            :
            <>
              <h1 className='title-contact' > Gostaria de falar <br/> com a gente? </h1>
              <form  method="POST"
                className='form-contact'
                onSubmit={handleSubmit}
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
                >
                </textarea>
                <button className='button__modal-contact' type="submit" >
                  { isFormSend ? 'Enviando...' : 'Enviar' }   
                </button>
                <span className='spanErro'>{erro}</span>
              </form>
            </> 
          }          
        </section>
      </div>
    </>
  )
}