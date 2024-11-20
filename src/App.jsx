import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Whishlists from './pages/Whishlists'
import Cart from './pages/Cart'
import View from './pages/View'
import Pnf from './pages/Pnf'
import Footer from './components/Footer'
function App() {

  return (
    <>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Whishlists' element={<Whishlists/>}/>
<Route path='/Cart' element={<Cart/>}/>
<Route path='/:id/view' element={<View/>}/>
<Route path='/*' element={<Pnf/>}/>
</Routes>
<Footer/>
    </>
  )
}

export default App
