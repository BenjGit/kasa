
import './style.css'
import { useParams } from 'react-router-dom';

function Logements() {
    const { id } = useParams();

    return (
        <div >
            <h1 >TEST 1</h1>
            <h2>Logement ID: {id}</h2>
        </div>
    )
}

export default Logements
