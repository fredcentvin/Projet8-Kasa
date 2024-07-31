import logo from '../assets/images/logos/logo_red.png'
import '../style/header.css'



function Header () {
    const title = 'A propos'
    const lienhome = 'Accueil'
    return(
        <div className='Kas-header'>
            <img src={logo} alt='Kasa' className='Kas-logo'/>
            <div className='Kas-nav'>
                <h2 className='Kas-home'>{lienhome}</h2>
                <h2 className='Kas-title'>{title}</h2>
            </div>
        </div>
    )
}
export default Header