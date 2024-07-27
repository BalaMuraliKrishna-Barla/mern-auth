import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path='/home' element={ <Home/> }/>
    <Route path='/signup' element={ <Signup/> }/>
    <Route path='/login' element={ <Login/> }/>
    <Route path='/about' element={ <About/> }/>
    <Route path='/profile' element={ <Profile/> }/>
    <Route path=''/>
  </Routes>
  <Footer />
  </BrowserRouter>
}
