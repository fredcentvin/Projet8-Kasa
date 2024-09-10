import Home from './Pages/Home'
import Infoslodging from './Pages/Infoslodging'
import Error from './Pages/Error'
import Apropos from './Pages/Apropos'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './Style/app.css'
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <>
      <div className='appContainer'>
        <Header />
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/loc/:id" element={<Infoslodging />} />
          <Route path="/Apropos" element ={<Apropos/>} />  
          <Route path="*" element ={<Error/>} />
      
        </Routes>
      </div>
        <Footer />
    </>
  )
  
}
export default App;
