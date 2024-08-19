import Collapse from '../components/Collapse'
import Bannerinfos from './Bannerinfos'
import collapseInfos from '../assets/datas/bdInfos.json'



function Apropos() {
   return (
      <section>
         <Bannerinfos />
         <Collapse data={collapseInfos} />
      </section>
   )
 }
 
 export default Apropos








