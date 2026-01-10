import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Layout from './src/components/Layout/Layout'
import './app.css'
import Inicio from '/src/pages/Inicio/Inicio'
import Servicios from '/src/pages/Servicios/Servicios'
import Productos from '/src/pages/Productos/Productos'
import Nosotros from '/src/pages/Nosotros/Nosotros'
import Contacts from '/src/components/Contacts/Contacts'





function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="app">
        <div className='app.container'>
          < Layout />
          <Contacts />
        </div>

        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/nosotros' element={<Nosotros />} />
        </Routes>

      </div >
    </Router >
  )
}

export default App
