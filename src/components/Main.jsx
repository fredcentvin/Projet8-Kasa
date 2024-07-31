import Card from './Card'
import Banner from './Banner'
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