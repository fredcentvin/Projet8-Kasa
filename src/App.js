import Home from './pages/Home'
import Infoslodging from './pages/Infoslodging'
import Error from './pages/Error'
import Apropos from './pages/Apropos'
import Header from './components/Header'
import Footer from './components/Footer'
import './style/app.css'
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <>
      <div className='appContainer'>
        <Header />
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/Infoslodging" element ={<Infoslodging/>} />
          <Route path="/Apropos" element ={<Apropos/>} />
          <Route path="*" element ={<Error/>} />
        </Routes>
      </div>
        <Footer />
    </>
  )
  
}
export default App;
