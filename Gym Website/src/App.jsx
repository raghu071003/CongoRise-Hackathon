import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/HOme/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Offers from './Components/Offers/Offers'
import Packages from './Components/Packages/Packages'
import GymGears from './Components/GymGears/GymGears'
import Timings from './Components/Timings/Timings'
import Register from './Components/Register/Register'
import Footer from './Components/Footer/Footer'
import Supplements from './Components/Supplements/Supplements'
import Login from './Components/Login/Login'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/offers' element={<Offers />} />
          <Route path='/gymGears' element={<GymGears />} />
          <Route path='/packages' element={<Packages />}/>
          <Route path='/timings' element={<Timings /> } />
          <Route path='/register' element={<Register />} />
          <Route path='/supplements' element={<Supplements />} />
          <Route path='/login' element={<Login />} />
        </Routes> 
        <div className='z-10'>
        <Footer />
        </div>
        
      </BrowserRouter>
    </div>
  )
}

export default App
