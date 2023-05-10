import './App.css'
import { Home } from './components/Home'
import { Login } from './components/Login'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<Login/>}></Route>
        <Route path= '/home' element={<Home/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
