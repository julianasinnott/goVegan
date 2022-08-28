import './index.css'
import './responsive.css'
import { Header } from "../../components/Header";
import * as React from 'react';
import { useState } from 'react';

export function RegisterPage() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [form, setForm] = React.useState({
      name: '',
      cpf: '',
      email: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setError('')
  }

   async function formSubmit(data) {
    setLoading(true)
    await fetch("https://formsubmit.co/ajax/julianasinnott@outlook.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .catch(error => console.log(error))
    setLoading(false)
  }

  async function handleSubmit(e) {
    e.preventDefault();    
    if(!validate()) return;

    let data = {
      name: form.name,
      cpf: form.cpf,
      email: form.email
    }
    await formSubmit(data)
    setForm({
      name: '',
      cpf: '',
      email: ''
    })
  }

  function validate() {
    if(form.name == "" || form.cpf == "" || form.email == ""){
      return setError("Preencha todos os campos!")
    }
    if (form.name > 30) {
      return setError("Máximo de 30 caracteres.")
    } 
    if(!form.email.includes("@")){
      return setError("E-mail inválido!")
    }
    return true
  }

  return(
    <div className="register">
      <Header type={"USER"} />
      <div className="register__form">
        <form 
        className='form__inputs'  
        method="POST"
        onSubmit={handleSubmit}
        >
          <h1 className='register__form__title'>
            Venha mudar o mundo <br />
            com a gente!
          </h1>
          <input 
            className='register__form__name input' 
            type="text" 
            name='name'
            value={form.name}
            onChange={handleChange} 
            placeholder='Seu nome completo' 
            pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
            required 
          />
          <input 
            className='register__form__cpf input' 
            type="text" 
            name='cpf'
            value={form.cpf}
            onChange={handleChange} 
            placeholder='Seu CPF' 
            maxLength="13"
            required 
          />
          <input 
            className='register__form__email input' 
            type="email" 
            name='email'
            value={form.email}
            onChange={handleChange}  
            placeholder='Seu melhor email' 
            required 
          />
          {
            error && 
            <p className='error-msg'>{error}</p>
          }
          <button className='register__form__button input' type="submit">
            {
              loading ?
              'ENVIANDO...'
              :
              'CADASTRAR'
            }
          </button>
        </form>
      </div>
    </div>
  )
}