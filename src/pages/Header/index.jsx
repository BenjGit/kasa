import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import kasaLogo from '../../assets/logo.svg'
import './style.css'


function Header() {
    return (
        <nav className='nav-container'>
            <Link to="/">
                <img className='home-logo' src={kasaLogo} />
            </Link>
            <div>
                <NavLink className='link' to="/">Accueil</NavLink>
                <NavLink className='link' to="/about">A Propos</NavLink>
            </div>
        </nav>
    )
}

export default Header