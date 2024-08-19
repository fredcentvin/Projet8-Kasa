import arrayLocs from '../assets/datas/bdLocations'
import { Link } from 'react-router-dom';
import '../style/container.css'

function Body() { 

    return (
     
        <div className="gridMain">
          {arrayLocs.map((loc) => (
            <Link to={`/loc/${loc.id}`} key={loc.id} >
            <figure className='Kas_card'>
               <img className='card_img' src={loc.cover} alt={loc.title}/>          
               <figcaption className='card_title'>{loc.title}</figcaption>
            </figure>
            </Link>
           
          ))}
        </div>
      
    );
  }
export default Body