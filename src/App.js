import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import "./App.css"
const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App