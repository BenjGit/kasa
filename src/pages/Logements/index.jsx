import './style.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Collapse from '../../components/Collapse';
import Rating from '../../components/Rating';

function Logements() {
    const [logementData, setLogementData] = useState(null);
    
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
      setCurrentImage((prevImage) => (prevImage + 1) % logementData.pictures.length);
    };

    const prevImage = () => {
      setCurrentImage((prevImage) => (prevImage - 1 + logementData.pictures.length) % logementData.pictures.length);
    };

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/src/components/Data/logements.json')
        .then((response) => response.json())
        .then((data) => {
            const logement = data.find((logement) => logement.id == id)
            if(logement){
                setLogementData(logement);

            }
            else 
            {
              navigate("/404");
            }
        })
        .catch((error) => console.error('Error fetching data:', error));
    }, [id]);

    return (
        <div>
          {logementData ? (
          <div className='container'>
            <div className='carousel'>
              <img className='cover' src={logementData.pictures[currentImage]} alt={`Slide ${currentImage + 1}`} />
              <i onClick={prevImage} className="fa-solid fa-chevron-left prev-btn"></i>
              <i onClick={nextImage} className="fa-solid fa-chevron-right next-btn"></i>
              <span className='slider-count'>{currentImage +1}/{logementData.pictures.length}</span>
            </div>
            <div className='content-container'>
              <div className='left-col'>
                <h1 className='title' >{logementData.title}</h1>
                <h2 className='location'>{logementData.location}</h2>
                <div className='tags-container'>
                  {logementData.tags.map((tag, index) => (
                    <div className='tag' key={index}>{tag}</div>
                  ))}
                </div>
              </div>
              <div className='right-col'>
                <div className='profile'> 
                  <h3 className='owner-name'>
                    {logementData.host.name.split(' ')[0]}
                    <br/>
                    {logementData.host.name.split(' ')[1]}
                  </h3>
                  <img className='owner-picture' src={logementData.host.picture} />
                </div>
                <Rating nbStars={logementData.rating}/>
              </div>
            </div>
            <div className='collapses-container'>
              <Collapse 
                description={logementData.description} 
                title='Description' 
                headerStyle={{
                  width:'547px',
                  fontSize: '18px',
                }}
                contentStyle={{
                  width:'547px',
                }}
              />
              <Collapse 
                description={logementData.equipments + ' '} 
                title='Équipements' 
                headerStyle={{
                  width:'547px',
                  fontSize: '18px',
                }}
                contentStyle={{
                  width:'547px',
                }}
              />
            </div>
          </div>
          ) : (
            <p>Chargement des détails du logement...</p>
          )}
        </div>
    )
}

export default Logements
