import './index.css'
import './responsive.css'
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export function LoginAdmPage() {

  const navigate = useNavigate();

  const [form, setForm] = React.useState({
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
    if (form.email == "testeadmin@teste.com" && form.password == "123456") {
      localStorage.setItem('token', true);
        navigate('/admin/receitas');
      } else {
        alert('E-mail ou password inválido!');
    }
  }

  return(
    <div className='login-adm'>
      <div className="login-adm__img"></div>
      <form 
        className='login-adm__form'  
        onSubmit={handleSubmit}
      >
          <h1 className='login-adm__form__title'>
            Venha mudar o mundo <br />
            com a gente!
          </h1>
          <input 
            className='login-adm__form__email input-adm' 
            type="email" 
            name='email'
            value={form.email}
            onChange={handleChange} 
            placeholder='Seu melhor email' 
            required
          />
          <input 
            className='login-adm__form__password input-adm' 
            type="password" 
            name="password"
            value={form.password}
            onChange={handleChange} 
            placeholder='Sua senha' 
            required
          />
          <button className='login-adm__form__button input-adm' type="submit">
            ENTRAR
          </button>
      </form>
    </div>
  )
}