import './App.css'
import Footer from './Components/Layout/Footer'
import Header from './Components/Layout/Header'
import { Routes, Route } from 'react-router-dom'
import Contact from './contactos/Contact'

function App() {
  return (
    <>
      <Header />
      <main className="flex-1  overflow-x-hidden">
        <Routes>
          <Route path="/"/>
          <Route path="/contacto" element={<Contact />} />
          {/* Puedes agregar más rutas aquí */}
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App