import homeBanner from '../../assets/home-banner.png'
import './style.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Home() {
    const [logementsData, setLogementsData] = useState([]);

    useEffect(() => {
        fetch('src/components/Data/logements.json')
        .then((response) => response.json())
        .then((data) => {
            setLogementsData(data);
        })
        .catch((error) => console.error('Error fetching data:', error));
}, []);


    return (
        <div className='home-wrapper'>
            <div className='img-container'>
                <img className='home-banner' src={homeBanner}/>
                <div className='centered-img-txt'> Chez vous, partout et ailleurs </div>
            </div>
            <div className='card-container'>
                {logementsData.map((item) => (
                        <div key={item.id} className='card'>
                            <Link to={`/logements/${item.id}`}>
                                <div className="overlay"></div>
                                <img className='banner-img' src={item.cover} alt={item.title} />
                                <span className='card-txt'>{item.title}</span>
                            </Link>
                        </div>
                ))}
            </div>
        </div>

    )
}

export default Home