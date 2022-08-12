import { Link } from "react-router-dom";
import '../../../global.css'
import './index.css'
import headerLogo from '/assets/white-logo.png'
import { routes } from './routes'

export function Header({ type }) {
  return(
    <header className="header">
        <img className="header__logo" src={headerLogo} alt="Logo GoVegan"/>
        <nav className="header__navbar">
          <div className="header__navbar-section">
            {routes[type].routes.map(route => (
              <button key={route.path} className="header__navbar__item" >
                <Link to={route.path}>{route.name}</Link>
              </button>        
            ))}   
          </div>
          <div className="header__navbar__purple-btn">
            <button className="header__navbar__item purple-btn">
             <Link to={routes[type].featured.path}>{routes[type].featured.name}</Link>              
            </button>
          </div>   
        </nav>
      </header>
  )
}