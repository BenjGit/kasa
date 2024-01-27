import { Link } from 'react-router-dom'
import kasaLogo from '../../assets/logo.svg'
import './style.css'


function Header() {
    return (
        <nav className='nav-container'>
            <Link to="/">
                <img className='home-logo' src={kasaLogo} />
            </Link>
            <div>
                <Link className='link' to="/">Accueil</Link>
                <Link className='link' to="/about">A Propos</Link>
            </div>
        </nav>
    )
}

export default Header