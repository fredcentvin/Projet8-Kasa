import logo from '../assets/images/logos/logo_white.png'
import copyright from '../assets/images/logos/image.png'
import '../Style/Footer.css'

function Footer () {
    return(
        <div className ='Kas-footer'>
        <img src = {logo} alt= 'kasa-footer' className='Logofooter'/>
        <img src= {copyright} alt='mention copyright' className='Copyrightfooter'/>
        </div>
    )
}
export default Footer