import logo from '../assets/images/logos/logo_red.png'
import '../Style/Header.css'
import { Link, NavLink} from 'react-router-dom'
 



function Header() {
    return(
        <nav className='Kas-header'>
            <Link to="/">
            <img src={logo} alt='Kasa' className='Kas-logo'/>
            </Link>
            <div className='Kas-nav'>
                <NavLink to="/">
                <h2 className='Kas-home'>ACCUEIL</h2>
                </NavLink>
                <NavLink to ="/Apropos">
                <h2 className='Kas-title'>A PROPOS</h2>
                </NavLink>
            </div>
        </nav>
    )
}
export default Header