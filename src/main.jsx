import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import SearchUsers from './components/SearchUsers/SearchUsers'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes basename="/">
        <Route path="/" element={<App/>}>
            <Route index  element={<Home/>}></Route>
            <Route  path='/users' element={<SearchUsers/>}></Route>
            <Route  path='/contact' element={<Contact/>}></Route>
        </Route>
        
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
