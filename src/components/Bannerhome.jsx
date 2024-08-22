import '../style/bannerhome.css'
import banner from '../assets/images/côte_rocheuse.png'

function Bannerhome () {
return(
    <div className= 'Kas-banner'>
        <img src={banner} alt='côte rocheuse' />
        
        <p>Chez vous, partout et ailleurs</p>
    </div>
)
}
export default Bannerhome