import React, { useContext } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/HOme/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Offers from './Components/Offers/Offers'
import Packages from './Components/Packages/Packages'
import GymGears from './Components/GymGears/GymGears'
import Timings from './Components/Timings/TimingCard.jsx'
import Register from './Components/Register/Register'
import Footer from './Components/Footer/Footer'
import Supplements from './Components/Supplements/Supplements'
import Login from './Components/Login/Login'
import AuthContext from './Components/Context/AuthContext'
import { Navigate } from 'react-router-dom'
import Payment from './Components/Payment/Payment'
import CheckMemberShip from './Components/Membership/CheckMemberShip'
import Profile from './Components/Profile/Profile'
import WorkoutPlanGenerator from './Components/WorkoutPlanGenerator/WorkoutGenerator'



function App() {
  const {isAuthenticated} = useContext(AuthContext)
  return (
    
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/gymGears' element={<GymGears />} />
          <Route path='/packages' element={<Packages />}/>
          <Route path='/timings' element={<Timings /> } />
          <Route path='/register' element={isAuthenticated ? <Home /> :  <Register />} />
          <Route path='/supplements' element={<Supplements />} />
          <Route path='/profile' element={isAuthenticated ? <Profile /> : <Navigate to='/login' replace />} />
          <Route path='/checkMembership' element= {isAuthenticated ? <CheckMemberShip />: <Navigate to="/login" replace />} />
          <Route path='/payment' element={isAuthenticated ? <Payment />: <Navigate to="/login" replace />} />
          <Route path='/workoutPlan' element = {<WorkoutPlanGenerator />} />
          <Route path="/login" element={isAuthenticated ? <Home /> :  <Login />} />
        </Routes> 
        <Footer />
      </BrowserRouter>
    
  )
}

export default App
