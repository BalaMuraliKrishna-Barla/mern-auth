import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';

export default function App() {
  return <BrowserRouter>
  <Routes>

    <Route path='/home' element={ <Home/> }/>
    <Route path='/signup' element={ <Signup/> }/>
    <Route path='/login' element={ <Login/> }/>
    <Route path='/about' element={ <About/> }/>
    <Route path='/profile' element={ <Profile/> }/>

  </Routes>

  </BrowserRouter>
}
