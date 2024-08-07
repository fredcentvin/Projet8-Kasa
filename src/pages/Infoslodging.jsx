import Error from './Error'
import { useParams } from 'react-router-dom'

import { useState, useEffect } from 'react';
import arrayLocs from '../assets/datas/bdLocations';
import Collapse from '../components/Collapse'
import Rating from '../components/Rating'
import Slider from '../components/Slider'
// import '../style/infoslodging.css'



    function Logement() {
        const [logement, setLogement] = useState(null); 
        const { id } = useParams(); // Récupère l'id du logement dans l'url

        useEffect(() => {  // Récupère les infos du logement en fonction de l'id
            const data = arrayLocs.find(loc => loc.id === id);
            // console.log(data)
            if (data) {
               setLogement(data);
            }    
            else { 
               setLogement(null);
            }
            }, [id]);

            if (!logement) { // Si l'id n'existe pas, affiche la page d'erreur
            return (<Error />);
            } 
   const data = [
    {
       title: 'Description',
       text: logement.description
    },
    {
       title: 'Equipements',
       // Créer une liste avec les équipements
       text: logement.equipments.map(equipment => (
          <p className='TextCollapse' key={equipment}>{equipment}</p>
       ))
    }
 ]
         return ( 
 <>
 {logement.pictures && <Slider images={logement.pictures} />}

      <section className='ContInfo'>

         <div className='ContInfoLogement'>
            <h1 className='TittleInfo'>{logement.title}</h1>
            <p className='TextInfo'>{logement.location}</p>
            <ul className='TagUl'>
               {logement.tags.map(tag => (
                  <li className='TagLi' key={tag}>{tag}</li>
               ))}
            </ul>
            </div>

    <div className='ContInfoOwner'>
       <div className='TEST'>
          <p className='TextInfoOwner'>{logement.host.name}</p>
          <img className='ImgOwner' src={logement.host.picture} alt={logement.host.name} />
       </div>

       <Rating rating={logement.rating} />
    </div>

 </section>

 <Collapse data={data}/>

</>
);   
}
export default Logement