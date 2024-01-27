import footerLogo from '../../assets/footer-logo.svg'
import './style.css'

function Footer() {
    return(
        <footer>
            <div className='footer-container'>
                <img className='footer-logo' src={footerLogo} />
                <span className='footer-txt'>© 2020 Kasa. All <br className='mobile-break'/> rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer