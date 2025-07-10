import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'
import NoticiasCard from '../noticias/NoticiasCard'
import InicioCards from './InicioCards'
import { Newspaper, ArrowRight, Sparkles, Building2, Award, Users, Compass } from 'lucide-react'
import { Link } from 'react-router-dom';

export default function Inicio() {
  const [imagenes, setImagenes] = useState([])

  useEffect(() => {
    const fetchImagenes = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"))
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setImagenes(data)
    }
    fetchImagenes()
  }, [])

  return (
    <div className="min-h-screen w-full bg-[#191a17] flex flex-col">
      {/* Contenedor principal que ocupa toda la pantalla */}
      <div className="flex-1 w-full flex items-start justify-center py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="
          w-full max-w-[1400px]
          grid gap-2 sm:gap-3 md:gap-4
          grid-cols-1 auto-rows-fr
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4
          min-h-[calc(100vh-2rem)]
          sm:min-h-[calc(100vh-3rem)]
          md:min-h-[calc(100vh-4rem)]
        ">
          
          {/* Hero Section - Paola Miranda Construcciones - COMPLETAMENTE RESPONSIVE */}
          <div className="
            group relative 
            col-span-1 row-span-2
            sm:col-span-2 sm:row-span-2
            lg:col-span-2 lg:row-span-2
            xl:col-span-2 xl:row-span-2
            rounded-[10px] sm:rounded-[12px] md:rounded-[15px] 
            w-full h-full 
            min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]
            animate-fadeInUp transition-all duration-700 hover:scale-[1.01] cursor-pointer overflow-hidden
          ">
            
            {/* Imagen de fondo con overlay */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="/FondoModerno.png" 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" 
                alt="Arquitectura moderna"
              />
              
              {/* Overlay gradient mejorado */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80"></div>
              
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Contenido principal con liquid glass - RESPONSIVE */}
            <div className="relative z-10 p-3 sm:p-4 md:p-6 lg:p-8 h-full flex flex-col justify-center">
              
              {/* Glass container principal */}
              <div className="relative">
                {/* Múltiples capas de glass */}
                <div className="absolute inset-0 bg-white/12 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/20 shadow-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/18 via-white/8 to-white/5 rounded-xl sm:rounded-2xl"></div>
                
                {/* Reflejos líquidos principales */}
                <div className="absolute top-0 left-2 right-2 sm:left-4 sm:right-4 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-white/10 to-transparent rounded-l-xl sm:rounded-l-2xl"></div>
                
                {/* Contenido RESPONSIVE */}
                <div className="relative p-3 sm:p-4 md:p-5 lg:p-6 space-y-2 sm:space-y-3 md:space-y-4">
                  
                  {/* Logo/Icono principal con glass effect - RESPONSIVE */}
                  <div className="relative mb-2 sm:mb-3">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-lg sm:rounded-xl border border-white/30 shadow-xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/15 to-white/10 rounded-lg sm:rounded-xl"></div>
                      <div className="relative p-2 sm:p-3">
                        <Building2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white drop-shadow-xl" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  {/* Título principal - RESPONSIVE */}
                  <div className="space-y-1 sm:space-y-2">
                    <h1 className="
                      text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
                      font-bold text-white leading-tight drop-shadow-xl
                    ">
                      PAOLA MIRANDA
                    </h1>
                  </div>

                  {/* Subtítulo con glass effect - RESPONSIVE */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/15 backdrop-blur-md rounded-md sm:rounded-lg border border-white/25 shadow-lg"></div>
                    <div className="relative px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5">
                      <p className="
                        text-xs sm:text-sm md:text-base 
                        text-white/90 font-medium tracking-wide drop-shadow-sm
                      ">
                        Arquitectura • Diseño • Construcción
                      </p>
                    </div>
                  </div>

                  {/* Descripción principal - RESPONSIVE */}
                  <p className="
                    text-xs sm:text-sm md:text-base 
                    text-white/85 leading-relaxed drop-shadow-sm
                  ">
                    Transformamos tus sueños en realidad con más de 8 años de experiencia.
                  </p>

                  {/* Grid de características con glass - RESPONSIVE */}
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-3 mt-2 sm:mt-3">
                    
                    {/* Característica 1 */}
                    <div className="relative group/feature">
                      <div className="absolute inset-0 bg-white/12 backdrop-blur-md rounded-md sm:rounded-lg border border-white/20 shadow-md group-hover/feature:bg-white/18 transition-all duration-300"></div>
                      <div className="relative p-1.5 sm:p-2 md:p-3 text-center">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mx-auto mb-1 bg-white/20 rounded-md sm:rounded-lg flex items-center justify-center">
                          <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white/90" strokeWidth={2} />
                        </div>
                        <p className="text-xs font-semibold text-white/95">Calidad</p>
                      </div>
                    </div>

                    {/* Característica 2 */}
                    <div className="relative group/feature">
                      <div className="absolute inset-0 bg-white/12 backdrop-blur-md rounded-md sm:rounded-lg border border-white/20 shadow-md group-hover/feature:bg-white/18 transition-all duration-300"></div>
                      <div className="relative p-1.5 sm:p-2 md:p-3 text-center">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mx-auto mb-1 bg-white/20 rounded-md sm:rounded-lg flex items-center justify-center">
                          <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white/90" strokeWidth={2} />
                        </div>
                        <p className="text-xs font-semibold text-white/95">Personal</p>
                      </div>
                    </div>

                    {/* Característica 3 */}
                    <div className="relative group/feature">
                      <div className="absolute inset-0 bg-white/12 backdrop-blur-md rounded-md sm:rounded-lg border border-white/20 shadow-md group-hover/feature:bg-white/18 transition-all duration-300"></div>
                      <div className="relative p-1.5 sm:p-2 md:p-3 text-center">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mx-auto mb-1 bg-white/20 rounded-md sm:rounded-lg flex items-center justify-center">
                          <Compass className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white/90" strokeWidth={2} />
                        </div>
                        <p className="text-xs font-semibold text-white/95">Único</p>
                      </div>
                    </div>
                  </div>

                  {/* Call to action principal - RESPONSIVE */}
                  <div className="relative mt-3 sm:mt-4">
                    <Link to="/proyectos">
                    <div className="relative group/cta">
                      {/* Glass background del CTA */}
                      <div className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-lg sm:rounded-xl border border-white/30 shadow-xl group-hover/cta:bg-white/25 transition-all duration-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/25 via-white/15 to-white/25 rounded-lg sm:rounded-xl opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Efecto líquido en hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000 rounded-lg sm:rounded-xl"></div>
                      
                      {/* Reflejos del CTA */}
                      <div className="absolute top-0 left-2 right-2 sm:left-4 sm:right-4 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                      
                      {/* Contenido del CTA */}
                      <div className="relative px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 flex items-center justify-center space-x-2">
                        <span className="text-white font-bold text-sm sm:text-base drop-shadow-lg">
                          Ver Proyectos
                        </span>
                        <ArrowRight 
                          className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-300 
                                    group-hover/cta:translate-x-2 group-hover/cta:-translate-y-1 drop-shadow-lg" 
                                    strokeWidth={2} 
                        />
                      </div>
                    </div>
                                    </Link>
                  </div>

                  {/* Decoración con sparkles - RESPONSIVE */}
                  <div className="flex items-center justify-center space-x-2 sm:space-x-3 mt-2 sm:mt-3">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white/60 animate-pulse" strokeWidth={2} />
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/70 rounded-full animate-pulse"></div>
                      <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/70 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white/60 animate-pulse" strokeWidth={2} style={{ animationDelay: '2s' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Borde exterior con efecto glass */}
            <div className="absolute inset-0 rounded-[10px] sm:rounded-[12px] md:rounded-[15px] border border-white/15 pointer-events-none"></div>
            
            {/* Reflejo superior principal */}
            <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 md:h-20 lg:h-24 bg-gradient-to-b from-white/12 to-transparent rounded-t-[10px] sm:rounded-t-[12px] md:rounded-t-[15px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Partículas flotantes decorativas - RESPONSIVE */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/50 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Proyectos - RESPONSIVE */}
          {imagenes.slice(0, 7).map((img, idx) => (
            <div key={img.id || idx} className="
              col-span-1 row-span-1
              min-h-[200px] sm:min-h-[300px] md:min-h-[320px]
            ">
              <InicioCards project={img} />
            </div>
          ))}

          {/* Div estilizado para noticias - RESPONSIVE */}
          <div className="
            group relative w-full h-full 
            col-span-1 row-span-1
            min-h-[200px] sm:min-h-[250px] md:min-h-[300px]
            animate-fadeInUp transition-all duration-700 hover:scale-[1.01] cursor-pointer overflow-hidden 
            rounded-[10px] sm:rounded-[12px] md:rounded-[15px]
          ">
            {/* Imagen de fondo arquitectónica */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Arquitectura moderna"
                className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay gradient para mejor legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
              
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Contenido con liquid glass effect - RESPONSIVE */}
            <div className="relative z-10 p-3 sm:p-4 md:p-6 flex flex-col justify-center items-center h-full text-center">
              
              {/* Glass container principal */}
              <div className="relative w-full">
                {/* Múltiples capas de glass */}
                <div className="absolute inset-0 bg-white/15 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-white/20 shadow-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5 rounded-xl sm:rounded-2xl"></div>
                
                {/* Reflejos líquidos */}
                <div className="absolute top-0 left-2 right-2 sm:left-4 sm:right-4 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                <div className="absolute top-1 left-4 right-4 sm:top-2 sm:left-8 sm:right-8 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
                
                {/* Contenido */}
                <div className="relative p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3 md:space-y-4">
                  
                  {/* Icono decorativo con glass - RESPONSIVE */}
                  <div className="relative mx-auto w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 mb-2 sm:mb-3">
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-lg"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/15 to-white/10 rounded-full"></div>
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Newspaper className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white drop-shadow-lg" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Título principal - RESPONSIVE */}
                  <h3 className="
                    text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
                    font-bold text-white leading-tight drop-shadow-lg
                  ">
                    Últimas Noticias
                  </h3>
                  
                  {/* Subtítulo - RESPONSIVE */}
                  <p className="
                    text-xs sm:text-sm md:text-base 
                    text-white/90 leading-relaxed drop-shadow-sm
                  ">
                    Descubre las últimas tendencias en arquitectura
                  </p>

                  {/* Decoración con sparkles - RESPONSIVE */}
                  <div className="flex items-center justify-center space-x-1.5 sm:space-x-2 my-2 sm:my-3">
                    <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white/80" strokeWidth={2} />
                    <div className="w-6 sm:w-8 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                    <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white/80" strokeWidth={2} />
                  </div>

                  {/* Call to action - RESPONSIVE */}
                  <div className="relative">
                    {/* Glass background para el CTA */}
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-lg sm:rounded-xl border border-white/30 shadow-lg group-hover:bg-white/25 transition-all duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/25 via-white/15 to-white/25 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Efecto líquido en hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-lg sm:rounded-xl"></div>
                    
                    {/* Reflejos del CTA */}
                    <div className="absolute top-0 left-2 right-2 sm:left-3 sm:right-3 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                    
                    {/* Contenido del CTA */}
                    <Link
                      to="/noticias"
                      className="relative px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-center space-x-1.5 sm:space-x-2 transition-all duration-300 hover:scale-105"
                    >
                      <span className="text-white font-semibold text-xs sm:text-sm md:text-base drop-shadow-sm">
                        ¡Presióname!
                      </span>
                      <ArrowRight 
                        className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white transition-transform duration-300 
                                  group-hover:translate-x-1 group-hover:-translate-y-0.5 drop-shadow-sm" 
                        strokeWidth={2} 
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Borde exterior con efecto glass */}
            <div className="absolute inset-0 rounded-[10px] sm:rounded-[12px] md:rounded-[15px] border border-white/10 pointer-events-none"></div>
            
            {/* Reflejo superior */}
            <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 md:h-20 bg-gradient-to-b from-white/10 to-transparent rounded-t-[10px] sm:rounded-t-[12px] md:rounded-t-[15px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Partículas flotantes decorativas - RESPONSIVE */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/40 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/3 left-3 sm:left-4 w-1 h-1 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
      
      
    </div>
  ) 
}