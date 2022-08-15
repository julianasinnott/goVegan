import './index.css'
import './responsive.css'

export function LoginAdmPage() {
  return(
    <div className='login-adm'>
      <div className="login-adm__img"></div>
      <form className='login-adm__form' action="">
          <h1 className='login-adm__form__title'>
            Venha mudar o mundo <br />
            com a gente!
          </h1>
          <input className='login-adm__form__email input-adm' type="email" name='user-email' placeholder='Seu melhor email' required />
          <input className='login-adm__form__password input-adm' type="password" name='user-password' placeholder='Sua senha' required />
          <button className='login-adm__form__button input-adm' type="submit">
            ENTRAR
          </button>
      </form>
    </div>
  )
}