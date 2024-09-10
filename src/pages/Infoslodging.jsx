import Error from './Error'
import { useParams } from 'react-router-dom'

import { useState, useEffect } from 'react';
import arrayLocs from '../assets/datas/bdLocations';
import Rating from '../Components/Rating'
import Slider from '../Components/Slider'
import TagName from '../Components/TagName'
import '../Style/infoslodging.css'
import Collapse2 from '../Components/Collapse2'

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

            if (!logement) { 
            return (<Error />);
            } 
            const tagsLogement = logement?.tags.map((tags, index) =>  <TagName key={index} tagText={tags} />)

      return ( 
<>
{logement.pictures && <Slider images={logement.pictures} />}

   <section className='ContInfo'>

      <div className='ContInfoLogement'>
         <h1 className='TittleInfo'>{logement.title}</h1>
         <p className='TextInfo'>{logement.location}</p>
        
         <div className="containerTags">
          {tagsLogement}
         </div>  
      </div>

      <div className='ContInfoOwner'>
         <div className='Owner'>
            <p className='TextInfoOwner'>{logement.host.name}</p>
            <img className='ImgOwner' src={logement.host.picture} alt={logement.host.name} />
         </div>

         <Rating rating={logement.rating} />
      </div>

   </section>
      <div className='containerCollapse2'>
         <Collapse2  title={"Description"} content={logement.description} />
         <Collapse2  title={"Equipements"} content={logement.equipments.map(equipment => (<p className='TextCollapse' key={equipment}>{equipment}</p>))} />
      </div>
</>
);   
}
export default Logement