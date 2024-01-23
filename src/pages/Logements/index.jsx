import './style.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Logements() {
    const [logementData, setLogementData] = useState([null]);
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
              console.log('test');
              navigate("/404");
            }
        })
        .catch((error) => console.error('Error fetching data:', error));
    }, [id]);


    return (
        <div>
          {logementData ? (
          <div className='container'>
            <img className='cover' src={logementData.cover} />
            <h1 className='title' >{logementData.title}</h1>
            <span >{logementData.tags}</span>
            <h2 className='location'>{logementData.location}</h2>
            <p>{logementData.description}</p>
            {/* Affichez d'autres détails du logement ici */}
          </div>
          ) : (
            <p>Chargement des détails du logement...</p>
          )}
        </div>
    )
}

export default Logements
