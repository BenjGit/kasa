import homeBanner from '../../assets/home-banner.png'
import './style.css'

function Home() {
    return (
        <div className='home-wrapper'>
            <div className='img-container'>
                <img className='home-banner' src={homeBanner}/>
                <div className='centered-img-txt'> Chez vous, partout et ailleurs </div>
            </div>
            <div className='card-container'>
                <div className='card'>
                    <div className="overlay"></div>
                    <img className='banner-img' src={homeBanner} />
                    <span className='card-txt'> oui </span>
                </div>
                <div className='card'>
                    <div className="overlay"></div>
                    <img className='banner-img' src={homeBanner} />
                    <span className='card-txt'> oui </span>
                </div>
                <div className='card'>
                    <div className="overlay"></div>
                    <img className='banner-img' src={homeBanner} />
                    <span className='card-txt'> oui </span>
                </div>
                <div className='card'>
                    <div className="overlay"></div>
                    <img className='banner-img' src={homeBanner} />
                    <span className='card-txt'> oui </span>
                </div>
                <div className='card'>
                    <div className="overlay"></div>
                    <img className='banner-img' src={homeBanner} />
                    <span className='card-txt'> oui </span>
                </div>
                <div className='card'>
                    <div className="overlay"></div>
                    <img className='banner-img' src={homeBanner} />
                    <span className='card-txt'> oui </span>
                </div>
            </div>
        </div>

    )
}

export default Home