import './App.css'
import Footer from './Components/Layout/Footer'
import Header from './Components/Layout/Header'
import { Routes, Route, useLocation } from 'react-router-dom'
import Contact from './contactos/Contact'
import Noticias from './noticias/Noticias'
import Nosotros from './nosotros/Nosotros'
import Login from './Login/Login'
import AgregarDatos from './AgregarDatos/AgregarDatos'

function App() {

 const location = useLocation();
 const hideLayout =
  location.pathname === "/login" ||
  location.pathname === "/login/AgregarDatos";


  return (
    <>
    <Routes>
     <Route path='/login' element={<Login/>}/>
     <Route path='/login/AgregarDatos' element={<AgregarDatos/>} />
     <Route path="/" element={
    <>
      {!hideLayout && <Header />}
      <main className="flex-1 overflow-x-hidden">
        {/* Aquí puedes usar un componente Home si tienes */}
      </main>
      {!hideLayout && <Footer />}
    </>
  }/>
  <Route path="/contacto" element={
    <>
      {!hideLayout && <Header />}
      <main className="flex-1 overflow-x-hidden">
        <Contact />
      </main>
      {!hideLayout && <Footer />}
    </>
  }/>
  <Route path='/noticias' element={
    <>
      {!hideLayout && <Header />}
      <main className="flex-1 overflow-x-hidden">
        <Noticias />
      </main>
      {!hideLayout && <Footer />}
    </>
  }/>
  <Route path='/nosotros' element={
    <>
      {!hideLayout && <Header />}
      <main className="flex-1 overflow-x-hidden">
        <Nosotros />
      </main>
      {!hideLayout && <Footer />}
    </>
  }/>
  {/* Agrega más rutas aquí si necesitas */}
</Routes>


    </>
  )
}

export default App