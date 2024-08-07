import arrayLocs from '../assets/datas/bdLocations'
// import Card from './Card'
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

// function Body() { 

//   return (
   
//       <div className="gridMain">
//         {arrayLocs.map((loc) => (
//           <Link to={`/Infoslodging/${loc.id}`} key={loc.id} >
//           <figure className='Kas_card'>
//              <img className='card_img' src={loc.cover} alt={loc.title}/>          
//              <figcaption className='card_title'>{loc.title}</figcaption>
//           </figure>
//           </Link>
         
//         ))}
//       </div>
    
//   );
// }
// export default Body

 // <NavLink key={loc.id} to={"/arrayLocs/"+loc.id+"/#"}>
            //     <Card key={loc.id} id={loc.id} cover={loc.cover} title={loc.title}  />
            // </NavLink>