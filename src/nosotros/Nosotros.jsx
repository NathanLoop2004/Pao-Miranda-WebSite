import React, { useState } from 'react';
import { User, Award, Building, Heart, Star, Briefcase } from 'lucide-react';

export default function Nosotros() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="min-h-screen bg-[#191a17] py-8 sm:py-12 lg:py-16">
      
      {/* Header con título principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="relative text-center">
          {/* Glass background para el header */}
          <div className="absolute inset-0 bg-white/8 backdrop-blur-xl rounded-3xl border border-white/15 shadow-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/6 to-white/4 rounded-3xl"></div>
          
          {/* Reflejos del header */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          
          {/* Contenido del header */}
          <div className="relative py-8 sm:py-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Sobre Mí
            </h1>
            <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto drop-shadow-sm">
              Conoce la historia detrás de cada proyecto
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid principal responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          
          {/* Sección foto con texto superpuesto */}
          <div className="relative group">
            {/* Glass container principal */}
            <div className="absolute -inset-2 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"></div>
            <div className="absolute inset-0 bg-white/8 backdrop-blur-lg rounded-2xl border border-white/15"></div>
            
            {/* Imagen y contenido */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-2xl">
              <img 
                src="/ImagenNosotros.png" 
                alt="Paola Miranda Arquitecta"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay gradient mejorado */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              
              {/* Efecto de brillo líquido */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Contenido con glass effect */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <div className="relative">
                  {/* Glass background para el texto */}
                  <div className="absolute inset-0 bg-white/12 backdrop-blur-xl rounded-xl border border-white/20 shadow-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/8 to-white/5 rounded-xl"></div>
                  
                  {/* Reflejos */}
                  <div className="absolute top-0 left-3 right-3 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"></div>
                  
                  {/* Texto */}
                  <div className="relative p-4 sm:p-6">
                    <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-lg">
                      Desde 2015 trabaja de forma independiente y colaborando en la empresa constructora familiar, 
                      desarrollando proyectos de arquitectura, diseño funcional y fiscalización de obras.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Reflejos exteriores */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/8 to-transparent rounded-t-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Sección interactiva de Paola */}
          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Glass container principal */}
            <div className="absolute -inset-2 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"></div>
            <div className="absolute inset-0 bg-white/8 backdrop-blur-lg rounded-2xl border border-white/15"></div>
            
            {/* Contenido interactivo */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-2xl">
              
              {/* Imagen de Paola */}
              <img
                src="/PaoMiranda.png"
                alt="Paola Miranda"
                className={`w-full h-full object-cover absolute transition-all duration-700 ${
                  hovered ? 'translate-x-full opacity-0 scale-110' : 'translate-x-0 opacity-100 scale-100'
                }`}
                style={{ zIndex: 10 }}
              />
              
              {/* Contenido de hover con glass effect */}
              <div
                className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ${
                  hovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'
                }`}
                style={{ zIndex: 20 }}
              >
                {/* Glass background para el contenido de hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#686961]/90 via-[#686961]/80 to-[#686961]/70 backdrop-blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10"></div>
                
                {/* Reflejos líquidos */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/15 to-transparent"></div>
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white/10 to-transparent"></div>
                
                {/* Contenido del texto */}
                <div className="relative p-6 sm:p-8 md:p-12 text-center">
                  {/* Icono decorativo */}
                  <div className="relative mb-4 sm:mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-white/15 backdrop-blur-lg rounded-full border border-white/25 shadow-xl flex items-center justify-center">
                      <User className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Título profesional */}
                  <h2 className="text-lg sm:text-xl md:text-2xl text-white/90 mb-2 sm:mb-3 font-light tracking-wide drop-shadow-lg">
                    Arquitecta
                  </h2>
                  
                  {/* Nombre principal */}
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 drop-shadow-xl">
                    Paola Miranda
                  </h1>
                  
                  {/* Decoración con glass */}
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-white/80 rounded-full shadow-lg"></div>
                    <div className="w-8 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                    <div className="w-2 h-2 bg-white/80 rounded-full shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Reflejos exteriores */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/8 to-transparent rounded-t-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Sección de biografía completa con liquid glass */}
        <div className="relative">
          {/* Glass container principal */}
          <div className="absolute -inset-4 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"></div>
          <div className="absolute -inset-2 bg-white/8 backdrop-blur-lg rounded-2xl border border-white/15"></div>
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl border border-white/20"></div>
          
          {/* Múltiples reflejos líquidos */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          <div className="absolute top-2 left-16 right-16 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white/8 to-transparent rounded-l-xl"></div>
          
          {/* Contenido principal */}
          <div className="relative p-6 sm:p-8 md:p-12">
            
            {/* Header de la biografía */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="relative inline-block">
                {/* Glass background para el título */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg"></div>
                <div className="relative px-6 sm:px-8 py-3 sm:py-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                    Mi Historia
                  </h2>
                </div>
              </div>
            </div>

            {/* Grid de estadísticas con glass */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
              
              {/* Estadística 1 */}
              <div className="relative group/stat">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg group-hover/stat:bg-white/15 transition-all duration-300"></div>
                <div className="relative p-4 sm:p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-white/15 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white/90" strokeWidth={2} />
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-white mb-1">8+</p>
                  <p className="text-white/70 text-sm">Años de experiencia</p>
                </div>
              </div>

              {/* Estadística 2 - CAMBIADA */}
              <div className="relative group/stat">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg group-hover/stat:bg-white/15 transition-all duration-300"></div>
                <div className="relative p-4 sm:p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-white/15 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-white/90" strokeWidth={2} />
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</p>
                  <p className="text-white/70 text-sm">Clientes satisfechos</p>
                </div>
              </div>

              {/* Estadística 3 */}
              <div className="relative group/stat">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg group-hover/stat:bg-white/15 transition-all duration-300"></div>
                <div className="relative p-4 sm:p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-white/15 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white/90" strokeWidth={2} />
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-white mb-1">2015</p>
                  <p className="text-white/70 text-sm">Inicio independiente</p>
                </div>
              </div>

              {/* Estadística 4 */}
              <div className="relative group/stat">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg group-hover/stat:bg-white/15 transition-all duration-300"></div>
                <div className="relative p-4 sm:p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-white/15 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white/90" strokeWidth={2} />
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</p>
                  <p className="text-white/70 text-sm">Dedicación</p>
                </div>
              </div>
            </div>

            {/* Texto de la biografía */}
            <div className="prose prose-lg max-w-none">
              <div className="text-white/90 text-base sm:text-lg leading-relaxed space-y-4 sm:space-y-6 drop-shadow-sm">
                
                <p>
                  ¡Hola! Soy <span className="font-semibold text-white">Paola Miranda</span>, arquitecta apasionada por el diseño funcional, humano y sostenible. 
                  Desde muy pequeña estuve rodeada del mundo de la construcción gracias a la empresa de mis padres, y crecí viendo cómo una obra puede transformar la vida de las personas. 
                  Con los años, descubrí que mi verdadera vocación no era solo diseñar estructuras, sino crear espacios que cuenten historias y se adapten a los sueños y necesidades de quienes los habitan.
                </p>

                <p>
                  Mi camino no ha sido lineal, y eso es parte de lo que me hace entender tan bien a mis clientes. En el décimo semestre de la carrera, tuve a mi primer hijo, 
                  quien me acompañó entre planos y clases para terminar mis estudios. Más tarde, defendí mi tesis embarazada de siete meses de mi segundo hijo. 
                  Desde entonces, he combinado la maternidad con el ejercicio profesional, creando proyectos personalizados, humanos y con propósito.
                </p>

                <p>
                  Cuento con más de <span className="font-semibold text-white">8 años de experiencia</span> en el ámbito de la construcción, abarcando diseño arquitectónico, obras privadas, públicas y dirección técnica. 
                  En el área de fiscalización, he trabajado en proyectos viales y edilicios, asegurando la calidad, 
                  el cumplimiento de normativas y la buena coordinación con instituciones, proveedores y comunidades.
                </p>

                <p>
                  Además, cuento con un <span className="font-semibold text-white">posgrado en patologías constructivas</span>, lo que me permite identificar y resolver problemas como humedad, 
                  fisuras y fallas estructurales, garantizando soluciones duraderas y seguras para mis clientes.
                </p>

                <p>
                  Me sigo formando constantemente en herramientas como <span className="font-semibold text-white">BIM, sustentabilidad, planificación territorial y gestión empresarial</span>, 
                  porque creo que una buena profesional nunca deja de aprender.
                </p>

                <p>
                  Me defino como una persona <span className="font-semibold text-white">empática, con principios claros y compromiso ético</span>. 
                  Me importa el problema, el sueño y la historia de cada persona que llega a mí. Tu proyecto no es uno más: para mí es personal, es importante, 
                  y merece toda mi atención y dedicación.
                </p>

                <p className="text-lg sm:text-xl font-medium text-white">
                  Gracias por estar acá. Me encantaría acompañarte a construir el espacio que estás imaginando.
                </p>
              </div>
            </div>

            {/* Call to action con glass */}
            <div className="mt-8 sm:mt-12 text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-white/15 backdrop-blur-lg rounded-2xl border border-white/25 shadow-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-2xl"></div>
                <div className="relative px-6 sm:px-8 py-3 sm:py-4">
                  <p className="text-white/90 font-medium">
                    ¿Listo para comenzar tu proyecto? 
                    <span className="block sm:inline sm:ml-2 text-white font-semibold">¡Conversemos!</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reflejos globales de ambiente */}
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
      <div className="fixed top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white/3 to-transparent pointer-events-none"></div>
      <div className="fixed top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white/3 to-transparent pointer-events-none"></div>
    </div>
  );
}