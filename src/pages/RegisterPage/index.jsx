import './index.css'
import './responsive.css'
import { Header } from "../../components/Header";
import * as React from 'react';

export function RegisterPage() {
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
  }

  function formSubmit(data) {
    fetch("https://formsubmit.co/ajax/larissa11.cedaspy@gmail.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .catch(error => console.log(error))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!validate()) return;

    let data = {
      name: form.name,
      cpf: form.cpf,
      email: form.email
    }

    formSubmit(data)
    setForm({
      name: '',
      cpf: '',
      email: ''
    })
  }

  function validate() {
    if(form.name == "" || form.cpf == "" || form.email == ""){
      return setErro("Preencha todos os campos")
    }
    if (form.name > 30) {
      return setErro("Máximo de 30 caracteres.")
    } 
    if(!form.email.includes("@")){
      return setErro("E-mail inválido!")
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
          <button className='register__form__button input' type="submit">
            CADASTRAR
          </button>
        </form>
      </div>
    </div>
  )
}