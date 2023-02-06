import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav/Nav'

function App() {
  

  return (
    <div className="App">
      <Nav/>
     
      <main>
        <Outlet/>
      </main>
     {/*  <Footer/> */}
     
    </div>
  )
}

export default App
