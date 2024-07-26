import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import '../style/App.css'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <>
    <Header /> 
    <Footer /> 
    <Main />
    </>
    </BrowserRouter>
  )
}
export default App;
