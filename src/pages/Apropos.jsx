// IMPORTS
// import './about.css'

// COMPONENTS
import Collapse from '../components/Collapse'

// ASSETS
import Bannerinfos from '../components/Bannerinfos'
import data from '../assets/datas/bdInfos.js'
import Infos from '../components/Infos'


function Apropos () {
    return (
        <div>
            
      <section>
         <img className='BannerCont' alt='Paysage' src={Bannerinfos} />
         <Collapse collapse={data}/>
      </section>
   
            <Infos />
            
        </div>
    )
}
export default Apropos

