import Header from './Header'
import Footer from './Footer'
import '../style/App.css'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <>
    <Header /> 
    <Footer /> 
    </>
    </BrowserRouter>
  )
}
export default App;
