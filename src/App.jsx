import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

function App() {

  return (
    <BrowserRouter>

      <nav>
        <Link to='/'>Home</Link>
        <br/>
        <Link to='/about'>About</Link>
        <br/>
        <Link to='/contact'>Contact</Link>
        <br/>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/about' element={<About />} />

        <Route path='/contact' element={<Contact />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
