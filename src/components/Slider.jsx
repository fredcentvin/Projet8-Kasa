// IMPORTS
import { useState } from 'react'
import '../style/slider.css'

// ASSETS
import arrow_right from '../assets/images/arrow_right.png';
import arrow_left from '../assets/images/arrow_left.png';


// Composant Slider > affiche les images du logement en slider
// Props : images du slider a afficher
function Slider({ images }) { 
   const [currentIndex, setCurrentIndex] = useState(0); // State > Index de l'image actuelle

   function nextImage() { // Passe a l'image suivante
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
   };

   function prevImage() { // Passe a l'image precedente
      setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
   };


   return (
      <section className='ContSlider'>
         
         {images.length > 1  // Si il n'y a qu'une seul image, on n'affiche seulement l'image
         &&
         <> 
            {/* // Affiche le compteur d'image */}
            <p className='CountSlider'>{currentIndex + 1} / {images.length}</p> 
            
            {/* // Affiche les fleches de navigation, au click on passe a l'image suivante ou precedente */}
            <img className='ArrowSliderLeft' src={arrow_right} alt="Flèche gauche" onClick={nextImage} />
            <img className='ArrowSliderRight' src={arrow_left} alt="Flèche droite" onClick={prevImage} /> 
         </>
         }
         
         {/* // Affiche l'image actuelle en fonction de l'index */}
         <img className='ImgSlider' src={images[currentIndex]} alt="Logement" /> 


      </section>
   )
}

export default Slider;