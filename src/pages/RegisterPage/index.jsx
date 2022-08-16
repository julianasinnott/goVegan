import './index.css'
import './responsive.css'
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function RegisterPage() {

  const navigate = useNavigate();

  const [form, setForm] = React.useState({
      name: '',
      cpf: '',
      email: '',
      password: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  return(
    <div className="register">
      <div className='space'></div>
      <div className="register__form">
        <form className='form__inputs' action="https://formsubmit.co/julianasinnott@outlook.com" method="POST">
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
          required 
          />

          <input 
          className='register__form__cpf input' 
          type="text" 
          name='cpf'
          value={form.cpf}
          onChange={handleChange} 
          placeholder='Seu CPF' 
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