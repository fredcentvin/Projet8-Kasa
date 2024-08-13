// IMPORTS
// import './apropos.css'

// COMPONENTS
import Collapse from '../components/Collapse'

// ASSETS
import Bannerinfos from './Bannerinfos'

import collapseInfos from '../assets/datas/bdInfos.json'


// Page Apropos > Contient une bannière et le composant Collapsehome
function Apropos() {
   return (
      <section>
         <Bannerinfos />
         <Collapse data={collapseInfos} />
      </section>
   )
 }
 
 export default Apropos








