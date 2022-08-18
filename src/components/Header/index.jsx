import { Link } from "react-router-dom";
import '../../../global.css'
import './index.css'
import './responsive.css'
import headerLogo from '/assets/white-logo.png'
import { routes } from './routes'

export function Header({ type }) {
  function handleLogout() {
    type === 'ADMIN' && localStorage.removeItem('token')
  }

  return(
    <header className="header">
        <img className="header__logo" src={headerLogo} alt="Logo GoVegan"/>
        <nav className="header__navbar">
          <div className="header__navbar-section">
            {routes[type].routes.map(route => (
              route.path === window.location.pathname ?
              (<button 
              key={route.path} 
              className="header__navbar__item"
              style={{'color':'var( --secundary)', 'borderBottom':'2px solid var( --secundary)'}} 
              >
              <Link to={route.path}>{route.name}</Link>
            </button>) 
            :
            (<button 
            key={route.path} 
            className="header__navbar__item" 
            >
            <Link to={route.path}>{route.name}</Link>
          </button>)       
            ))}   
          </div>
          <div className="header__navbar__purple-btn">
            <button
              onClick={handleLogout}
              className="header__navbar__item purple-btn">
             <Link to={routes[type].featured.path}>{routes[type].featured.name}</Link>              
            </button>
          </div>   
        </nav>
      </header>
  )
}