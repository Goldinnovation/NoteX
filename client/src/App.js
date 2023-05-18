import './App.css'
import { Home } from './components/main/home.jsx'
import { Favorite } from './components/favor.jsx'
import {Routes, Route} from 'react-router-dom'
import { Navbar } from './components/navbar'
import { Settings } from './components/settings.jsx'



function App() {
 

  return ( 
    <>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes> 
      
    </>
  )
}

export default App
