
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router , Routes ,Route } from "react-router-dom"
import "./App.css"
import Home from './components/Home'
import About from './components/About'

import Signin from './components/Signin'
import Register from './components/Register'
import ErrorPage from './components/ErrorPage'
import Logout from './components/Logout'
import Amazon from './components/amazon/Amazon'




const App = () => {
  return (
    <>
<Router>
  <Navbar/> 
  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/about" element={<About/>} />
    <Route exact path="/signin" element={<Signin/>} />
    <Route exact path="/register" element={<Register/>} />
    <Route exact path="/logout" element={<Logout/>} />
    <Route exact path="*" element={<ErrorPage/>} />
    <Route exact path="/amazon" element={<Amazon/>} />
   
  </Routes>
</Router>
    </>
  )
}

export default App
