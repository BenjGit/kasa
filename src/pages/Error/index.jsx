import './style.css'
import { Link } from 'react-router-dom'


function Error() {
  return (
    <div className='error-wrapper'>
      <h1 className='error-title'>404</h1>
      <h2 className='error-subtitle'>Oups! La page que vous demandez n'existe pas.</h2>
      <Link className='error-link' to="/">Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default Error
