import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { Calendar, Tag, Ruler, MapPin, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

export default function ProyectoDetalle() {
  const { id } = useParams();
  const [proyecto, setProyecto] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchProyecto = async () => {
      const docRef = doc(db, "projects", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProyecto({ id: docSnap.id, ...docSnap.data() });
      }
    };
    fetchProyecto();
  }, [id]);

  const images = proyecto?.images || [];

  // AUTOPLAY: cambia de imagen cada 4 segundos
  useEffect(() => {
    if (!images.length) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [images, current]);

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const goTo = idx => setCurrent(idx);

  if (!proyecto) {
    return (
      <div className="min-h-screen bg-[#191a17] flex items-center justify-center">
        <div className="relative">
          {/* Glass loading container */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"></div>
          <div className="relative px-8 py-6 text-center">
            <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white/90 font-medium">Cargando proyecto...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#191a17] text-white">
      {/* Header con botón de regreso */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button className="group/back relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105">
            {/* Glass background */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-white/8 to-white/15 rounded-xl opacity-0 group-hover/back:opacity-100 transition-opacity duration-300"></div>
            
            {/* Content */}
            <div className="relative px-4 py-2.5 flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4 text-white/90 transition-transform duration-300 group-hover/back:-translate-x-1" strokeWidth={2} />
              <span className="text-white/90 font-medium text-sm">Volver</span>
            </div>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Carrusel de imágenes con liquid glass */}
        {images.length > 0 && (
          <div className="relative mb-8 sm:mb-12">
            {/* Glass container para el carrusel */}
            <div className="relative">
              {/* Múltiples capas de glass */}
              <div className="absolute -inset-4 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"></div>
              <div className="absolute -inset-2 bg-white/8 backdrop-blur-lg rounded-2xl border border-white/15"></div>
              
              {/* Carrusel principal */}
              <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] w-full overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
                <div
                  className="flex transition-transform duration-700 ease-in-out h-full"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {images.map((img, idx) => (
                    <div key={idx} className="relative w-full h-full flex-shrink-0">
                      <img
                        src={img.url || img}
                        className="w-full h-full object-cover"
                        alt={`${proyecto.title} - Imagen ${idx + 1}`}
                      />
                      {/* Overlay sutil */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  ))}
                </div>

                {/* Controles del carrusel con glass effect */}
                {images.length > 1 && (
                  <>
                    {/* Botón anterior */}
                    <button
                      onClick={handlePrev}
                      className="group/prev absolute top-1/2 left-4 -translate-y-1/2 z-30 overflow-hidden rounded-full transition-all duration-300 hover:scale-110"
                      aria-label="Imagen anterior"
                    >
                      {/* Glass background */}
                      <div className="absolute inset-0 bg-white/15 backdrop-blur-lg border border-white/25 rounded-full shadow-lg"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-full opacity-0 group-hover/prev:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Icon */}
                      <div className="relative p-3 sm:p-4">
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-sm transition-transform duration-300 group-hover/prev:-translate-x-0.5" strokeWidth={2} />
                      </div>
                    </button>

                    {/* Botón siguiente */}
                    <button
                      onClick={handleNext}
                      className="group/next absolute top-1/2 right-4 -translate-y-1/2 z-30 overflow-hidden rounded-full transition-all duration-300 hover:scale-110"
                      aria-label="Imagen siguiente"
                    >
                      {/* Glass background */}
                      <div className="absolute inset-0 bg-white/15 backdrop-blur-lg border border-white/25 rounded-full shadow-lg"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-full opacity-0 group-hover/next:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Icon */}
                      <div className="relative p-3 sm:p-4">
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-sm transition-transform duration-300 group-hover/next:translate-x-0.5" strokeWidth={2} />
                      </div>
                    </button>
                  </>
                )}

                {/* Indicadores con glass effect */}
                <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30">
                  <div className="relative">
                    {/* Glass background para indicadores */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 shadow-lg"></div>
                    
                    {/* Indicadores */}
                    <div className="relative flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-2.5">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => goTo(idx)}
                          className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                            idx === current ? 'scale-125' : 'hover:scale-110'
                          }`}
                          aria-label={`Ir a imagen ${idx + 1}`}
                        >
                          {/* Glass dot */}
                          <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full border transition-all duration-300 ${
                            idx === current 
                              ? 'bg-white border-white/50 shadow-lg' 
                              : 'bg-white/40 border-white/30 hover:bg-white/60'
                          }`}></div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Reflejos del carrusel */}
              <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-white/8 to-transparent rounded-t-2xl pointer-events-none"></div>
            </div>
          </div>
        )}

        {/* Información del proyecto con liquid glass */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Columna principal - Título y descripción */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            
            {/* Título con glass effect */}
            <div className="relative">
              {/* Glass background */}
              <div className="absolute inset-0 bg-white/8 backdrop-blur-xl rounded-2xl border border-white/15 shadow-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/6 to-white/4 rounded-2xl"></div>
              
              {/* Reflejos */}
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              
              {/* Contenido */}
              <div className="relative p-6 sm:p-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                  {proyecto.title}
                </h1>
              </div>
            </div>

            {/* Descripción con glass effect */}
            <div className="relative">
              {/* Glass background */}
              <div className="absolute inset-0 bg-white/8 backdrop-blur-xl rounded-2xl border border-white/15 shadow-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/6 to-white/4 rounded-2xl"></div>
              
              {/* Reflejos */}
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              
              {/* Contenido */}
              <div className="relative p-6 sm:p-8">
                <p className="text-white/90 text-base sm:text-lg leading-relaxed drop-shadow-sm">
                  {proyecto.description}
                </p>
              </div>
            </div>
          </div>

          {/* Columna lateral - Detalles */}
          <div className="space-y-4 sm:space-y-6">
            
            {/* Detalles del proyecto */}
            <div className="relative">
              {/* Glass background */}
              <div className="absolute inset-0 bg-white/8 backdrop-blur-xl rounded-2xl border border-white/15 shadow-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/6 to-white/4 rounded-2xl"></div>
              
              {/* Reflejos */}
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              
              {/* Contenido */}
              <div className="relative p-6 sm:p-8 space-y-4 sm:space-y-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 drop-shadow-sm">
                  Detalles del Proyecto
                </h3>

                {/* Categoría */}
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-md"></div>
                  <div className="relative p-4 flex items-center space-x-3">
                    <div className="p-2 bg-white/15 rounded-lg">
                      <Tag className="w-4 h-4 sm:w-5 sm:h-5 text-white/90" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-white/70 text-xs sm:text-sm uppercase tracking-wider">Categoría</p>
                      <p className="text-white font-medium text-sm sm:text-base capitalize">{proyecto.category}</p>
                    </div>
                  </div>
                </div>

                {/* Área */}
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-md"></div>
                  <div className="relative p-4 flex items-center space-x-3">
                    <div className="p-2 bg-white/15 rounded-lg">
                      <Ruler className="w-4 h-4 sm:w-5 sm:h-5 text-white/90" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-white/70 text-xs sm:text-sm uppercase tracking-wider">Área</p>
                      <p className="text-white font-medium text-sm sm:text-base">{proyecto.area} m²</p>
                    </div>
                  </div>
                </div>

                {/* Fecha */}
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-md"></div>
                  <div className="relative p-4 flex items-center space-x-3">
                    <div className="p-2 bg-white/15 rounded-lg">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white/90" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-white/70 text-xs sm:text-sm uppercase tracking-wider">Fecha</p>
                      <p className="text-white font-medium text-sm sm:text-base">{proyecto.date}</p>
                    </div>
                  </div>
                </div>

                {/* Ubicación si existe */}
                {proyecto.location && (
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-md"></div>
                    <div className="relative p-4 flex items-center space-x-3">
                      <div className="p-2 bg-white/15 rounded-lg">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white/90" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-white/70 text-xs sm:text-sm uppercase tracking-wider">Ubicación</p>
                        <p className="text-white font-medium text-sm sm:text-base">{proyecto.location}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reflejos globales */}
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
      <div className="fixed top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white/3 to-transparent pointer-events-none"></div>
    </div>
  );
}