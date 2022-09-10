import '../../../global.css'
import './index.css'
import './responsive.css'
import { Link } from "react-router-dom";
import { routes } from './routes'
import headerLogo from '/assets/white-logo.png'
import { List, X } from 'phosphor-react';
import { useState } from 'react';

export function Header({ type }) {
  const [showMenu, setShowMenu] = useState(false)
  
  function handleLogout() {
    type === 'ADMIN' && localStorage.removeItem('token')
  }

  return(
    <header className="header">
        <img className="header__logo" src={headerLogo} alt="Logo GoVegan branco"/>
        {showMenu?
          <X 
            onClick={()=> setShowMenu(!showMenu)}
            className='header__navbar-icon'
          />
          :
          <List 
            onClick={()=> setShowMenu(!showMenu)}
            className='header__navbar-icon'
          />
        }          
        <nav className={showMenu ? "header__navbar navbar-mobile" : "header__navbar"}>
          <div className="header__navbar-section">
            {routes[type].routes.map(route => (    
              <Link
                className='header__navbar__link'
                to={route.path}>       
                <button 
                  key={route.path} 
                  className="header__navbar__item gradient"
                  style={
                    route.path === window.location.pathname ?
                    {'color':'var(--secundary)', 'borderBottom':'2px solid var(--tertiary)'}
                    :
                    {'color':'var(--white)'}
                  } 
                >
                  {route.name}
                  {
                    route.icon && <route.icon weight='bold' className='header__navbar__item__icon'/>
                  }
                </button>
              </Link>
            ))}   
          </div>
          <div className="header__navbar__purple-btn">
            <Link to={routes[type].featured.path}>
              <button
                onClick={handleLogout}
                className="header__navbar__item purple-btn btn-register"
              >
                {routes[type].featured.name}              
              </button>
            </Link>
          </div>   
        </nav>
      </header>
  )
}