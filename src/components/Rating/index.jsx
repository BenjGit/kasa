import './style.css'

function Rating({ nbStars }) {
    
    const ratingStars = parseInt(nbStars)
    
    return (
        <div>
            {[...Array(5)].map((_, index) => (
                <i key={index} className={`fa-solid fa-star ${index < ratingStars ? 'full-star' : 'empty-star' }`}></i>
            ))}
        </div>
    );
}


export default Rating
