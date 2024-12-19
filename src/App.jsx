import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <><div className="app">
      this is the start of the ISOC website
    </div>
    
    <Routes>
      <Route path="/" element ={<Home />}/>
      </Routes></>


  )
}

export default App

