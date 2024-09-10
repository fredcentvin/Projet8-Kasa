import star_active from '../assets/images/star_active.png'
import star_inactive from '../assets/images/star_inactive.png'
import '../Style/rating.css'

function Rating({ rating }) { 
    const stars = []; 
  
    for (let i = 1; i <= 5; i++) { // Boucle pour afficher les étoiles
       if (i <= rating) { 
          stars.push(<img className='Stars' key={i} src={star_active} alt="star-filled" />);
       } else { 
          stars.push(<img className='Stars' key={i} src={star_inactive} alt="star-empty" />);
       }
    }
 
    return <div>{stars}</div>; 
 }
 export default Rating;