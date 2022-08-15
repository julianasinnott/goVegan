import './index.css'
import './responsive.css'

export function RegisterPage() {
  return(
    <div className="register">
      <div className='space'></div>
      <div className="register__form">
        <form className='form__inputs' action="https://formsubmit.co/julianasinnott@outlook.com" method="POST">
          <h1 className='register__form__title'>
            Venha mudar o mundo <br />
            com a gente!
          </h1>
          <input className='register__form__name input' type="text" name='user-name' placeholder='Seu nome completo' required />
          <input className='register__form__cpf input' type="text" name='user-cpf' placeholder='Seu CPF' required />
          <input className='register__form__email input' type="email" name='user-email' placeholder='Seu melhor email' required />
          <button className='register__form__button input' type="submit">
            CADASTRAR
          </button>
        </form>
      </div>
    </div>
  )
}