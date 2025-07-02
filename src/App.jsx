import './App.css'
import Footer from './Components/Layout/Footer'
import Header from './Components/Layout/Header'
import { Routes, Route, useLocation } from 'react-router-dom'
import Contact from './contactos/Contact'
import Noticias from './noticias/Noticias'
import Nosotros from './nosotros/Nosotros'
import Login from './Login/Login'
import AgregarDatos from './AgregarDatos/AgregarDatos'
import Proyectos from './proyectos/Proyectos'
import React, { useEffect, useState } from 'react';
import Loader from './Components/Loader';
import ProtectedRoute from './ProtectedRoute';
import Inicio from './Inicio/Inicio'
import ProyectoDetalle from './proyectos/ProyectoDetalle';

function App() {
 const location = useLocation();
 const [loading, setLoading] = useState(true);

 useEffect(() => {
   setLoading(true);
   const timer = setTimeout(() => setLoading(false), 4000); // 4 segundos
   return () => clearTimeout(timer);
 }, [location.pathname]);

 const hideLayout =
  location.pathname === "/login" ||
  location.pathname === "/login/AgregarDatos";


  if (loading) return <Loader />;

  return (
    <>
    <Routes>
     <Route path='/login' element={<Login/>}/>
     <Route
          path='/login/AgregarDatos'
          element={
            <ProtectedRoute>
              <AgregarDatos />
            </ProtectedRoute>
          }
        />
     <Route path="/" element={
    <>
      {!hideLayout && <Header />}
      <main className="flex-1 overflow-x-hidden">
        <Inicio/>
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
    <Route path="/noticias" element={
    <>
      {!hideLayout && <Header />}
      <main className="flex-1 overflow-x-hidden">
        <Noticias />
      </main>
      {!hideLayout && <Footer />}
    </>
  }/>
  <Route path="/proyectos" element={
    <>
      {!hideLayout && <Header />}
      <main className="flex-1 overflow-x-hidden">
        <Proyectos />
      </main>
      {!hideLayout && <Footer />}
    </>
  }/>
  <Route path="/proyectos/:id" element={
    <>
      {!hideLayout && <Header />}
      <main className="flex-1 overflow-x-hidden">
        <ProyectoDetalle />
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