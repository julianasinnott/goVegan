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
        <img className="header__logo" src={headerLogo} alt="Logo GoVegan"/>
        {
          showMenu?
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
        <nav className=
        {
          showMenu ?
          "header__navbar navbar-mobile"
          :
          "header__navbar"
        }
        >
          <div className="header__navbar-section">
            {routes[type].routes.map(route => (              
              <button 
                key={route.path} 
                className="header__navbar__item gradient"
                style={
                  route.path === window.location.pathname ?
                  {'color':'var(--secundary)', 'borderBottom':'2px solid var(--secundary)'}
                  :
                  {'color':'var(--white)'}
                } 
              >
              <Link to={route.path}>{route.name}</Link>
            </button>
           ))}   
          </div>
          <div className="header__navbar__purple-btn">
            <button
              onClick={handleLogout}
              className="header__navbar__item purple-btn btn-register">
             <Link to={routes[type].featured.path}>{routes[type].featured.name}</Link>              
            </button>
          </div>   
        </nav>
      </header>
  )
}