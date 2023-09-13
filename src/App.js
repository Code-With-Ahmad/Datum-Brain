import React from 'react'
import './CSS/App.css';
import Home from './Components/Home';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import NotFound from './Components/NotFound';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route  path = "/"  element={<Home/>} />
        <Route  path = "*"  element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

export default App
