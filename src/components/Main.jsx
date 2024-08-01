import Card from './Card'
import Banner from './Bannerhome'
// import './style/Main.css'

function displayLoc () {
return (
    <>
    <div>
        <Banner />
    </div>
    <div className='gridMain'>
        <Card />
    </div>
    </>
)

}
export default displayLoc