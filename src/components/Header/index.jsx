import { Link } from "react-router-dom";
import '../../../global.css'
import './index.css'
import backgroundHeader from '../../../public/assets/background-header.png'
import headerLogo from '../../../public/assets/white-logo.png'

export function Header() {
  return(
    <header class="header">
        <img class="header__background" src={backgroundHeader} alt=""/>
        <img class="header__logo" src={headerLogo} alt="Logo GoVegan"/>
        <nav class="header__navbar">
          <div class="header__navbar-section">
            <button class="header__navbar__item" >
              <Link to="/">Início</Link>
            </button>        
            <button class="header__navbar__item">
              <Link to="/blog">Blog</Link>
            </button>         
            <button class="header__navbar__item">
              <Link to="/receitas">Receitas</Link>              
            </button>       
            <button class="header__navbar__item">
              <Link to="/parceiros">Parceiros</Link>
            </button>       
            <button class="header__navbar__item divisor">
              <Link to="/nutricao">Nutrição</Link>
            </button>     
          </div>
          <div class="header__navbar__purple-btn">
            <button class="header__navbar__item purple-btn">
             <Link to="/cadastro">Cadastre-se</Link>              
            </button>
          </div>   
        </nav>
      </header>
  )
}