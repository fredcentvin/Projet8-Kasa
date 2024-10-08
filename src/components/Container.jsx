import arrayLocs from '../assets/datas/bdLocations'
import { Link } from 'react-router-dom';
import '../Style/Container.css'
import Card from '../Components/Card'

function Body() { 

    return (
     
        <div className="gridCards">
          {arrayLocs.map((loc) => (
            <Link to={`/loc/${loc.id}`} key={loc.id} >
            <figure className='Kas_card'>
            <Card key={loc.id} id={loc.id} cover={loc.cover} title={loc.title}  />
            </figure>
            </Link>
           
          ))}
        </div>
      
    );
  }
export default Body