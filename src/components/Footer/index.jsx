import footerLogo from '../../assets/footer-logo.svg'
import './style.css'

function Footer() {
    return(
        <footer className='footer-container'>
            <img className='footer-logo' src={footerLogo} />
            © 2020 Kasa. All rights reserved
        </footer>
    )
}

export default Footer