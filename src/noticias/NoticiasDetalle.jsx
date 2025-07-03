import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { Calendar, Tag, User, ArrowLeft, Clock, Share2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function NoticiasCardClick() {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchNoticia = async () => {
      const docRef = doc(db, "news", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setNoticia({ id: docSnap.id, ...docSnap.data() });
      }
    };
    fetchNoticia();
  }, [id]);

  const images = noticia?.images || [];

  // AUTOPLAY: cambia de imagen cada 5 segundos
  useEffect(() => {
    if (!images.length) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images, current]);

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const goTo = idx => setCurrent(idx);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: noticia.title,
        text: noticia.excerpt || noticia.description,
        url: window.location.href,
      });
    } else {
      // Fallback: copiar URL al clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('URL copiada al portapapeles');
    }
  };

  if (!noticia) {
    return (
      <div className="min-h-screen bg-[#191a17] flex items-center justify-center">
        <div className="relative">
          {/* Glass loading container */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"></div>
          <div className="relative px-8 py-6 text-center">
            <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white/90 font-medium">Cargando noticia...</p>
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
          <div className="flex items-center justify-between">
            <button 
              onClick={() => window.history.back()}
              className="group/back relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105"
            >
              {/* Glass background */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-white/8 to-white/15 rounded-xl opacity-0 group-hover/back:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative px-4 py-2.5 flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4 text-white/90 transition-transform duration-300 group-hover/back:-translate-x-1" strokeWidth={2} />
                <span className="text-white/90 font-medium text-sm">Volver</span>
              </div>
            </button>

            {/* Botón compartir */}
            <button 
              onClick={handleShare}
              className="group/share relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105"
            >
              {/* Glass background */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-white/8 to-white/15 rounded-xl opacity-0 group-hover/share:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative px-4 py-2.5 flex items-center space-x-2">
                <Share2 className="w-4 h-4 text-white/90" strokeWidth={2} />
                <span className="text-white/90 font-medium text-sm">Compartir</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        
        {/* Header de la noticia */}
        <div className="relative mb-8 sm:mb-12">
          {/* Glass container */}
          <div className="absolute inset-0 bg-white/8 backdrop-blur-xl rounded-2xl border border-white/15 shadow-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/6 to-white/4 rounded-2xl"></div>
          
          {/* Reflejos */}
          <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          
          {/* Contenido */}
          <div className="relative p-6 sm:p-8">
            {/* Metadatos */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {/* Categoría */}
              {noticia.category && (
                <div className="relative">
                  <div className="absolute inset-0 bg-white/15 backdrop-blur-md rounded-full border border-white/25 shadow-md"></div>
                  <div className="relative px-3 py-1.5 flex items-center space-x-2">
                    <Tag className="w-3 h-3 text-white/90" strokeWidth={2} />
                    <span className="text-xs font-semibold text-white/95 uppercase tracking-wider">
                      {noticia.category}
                    </span>
                  </div>
                </div>
              )}

              {/* Fecha */}
              {noticia.date && (
                <div className="relative">
                  <div className="absolute inset-0 bg-white/15 backdrop-blur-md rounded-full border border-white/25 shadow-md"></div>
                  <div className="relative px-3 py-1.5 flex items-center space-x-2">
                    <Calendar className="w-3 h-3 text-white/90" strokeWidth={2} />
                    <span className="text-xs font-semibold text-white/95">
                      {noticia.date}
                    </span>
                  </div>
                </div>
              )}

              {/* Tiempo de lectura */}
              {noticia.readTime && (
                <div className="relative">
                  <div className="absolute inset-0 bg-white/15 backdrop-blur-md rounded-full border border-white/25 shadow-md"></div>
                  <div className="relative px-3 py-1.5 flex items-center space-x-2">
                    <Clock className="w-3 h-3 text-white/90" strokeWidth={2} />
                    <span className="text-xs font-semibold text-white/95">
                      {noticia.readTime}
                    </span>
                  </div>
                </div>
              )}

              {/* Autor */}
              {noticia.author && (
                <div className="relative">
                  <div className="absolute inset-0 bg-white/15 backdrop-blur-md rounded-full border border-white/25 shadow-md"></div>
                  <div className="relative px-3 py-1.5 flex items-center space-x-2">
                    <User className="w-3 h-3 text-white/90" strokeWidth={2} />
                    <span className="text-xs font-semibold text-white/95">
                      {noticia.author}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Título */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight drop-shadow-lg mb-4">
              {noticia.title}
            </h1>

            {/* Excerpt o descripción */}
            {(noticia.excerpt || noticia.description) && (
              <p className="text-white/80 text-lg leading-relaxed drop-shadow-sm">
                {noticia.excerpt || noticia.description}
              </p>
            )}
          </div>
        </div>

        {/* Carrusel de imágenes */}
        {images.length > 0 && (
          <div className="relative mb-8 sm:mb-12">
            {/* Glass container para el carrusel */}
            <div className="relative">
              {/* Múltiples capas de glass */}
              <div className="absolute -inset-4 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"></div>
              <div className="absolute -inset-2 bg-white/8 backdrop-blur-lg rounded-2xl border border-white/15"></div>
              
              {/* Carrusel principal */}
              <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] w-full overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
                <div
                  className="flex transition-transform duration-700 ease-in-out h-full"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {images.map((img, idx) => (
                    <div key={idx} className="relative w-full h-full flex-shrink-0">
                      <img
                        src={img.url || img}
                        className="w-full h-full object-cover"
                        alt={`${noticia.title} - Imagen ${idx + 1}`}
                      />
                      {/* Overlay sutil */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  ))}
                </div>

                {/* Controles del carrusel */}
                {images.length > 1 && (
                  <>
                    {/* Botón anterior */}
                    <button
                      onClick={handlePrev}
                      className="group/prev absolute top-1/2 left-4 -translate-y-1/2 z-30 overflow-hidden rounded-full transition-all duration-300 hover:scale-110"
                      aria-label="Imagen anterior"
                    >
                      <div className="absolute inset-0 bg-white/15 backdrop-blur-lg border border-white/25 rounded-full shadow-lg"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-full opacity-0 group-hover/prev:opacity-100 transition-opacity duration-300"></div>
                      
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
                      <div className="absolute inset-0 bg-white/15 backdrop-blur-lg border border-white/25 rounded-full shadow-lg"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-full opacity-0 group-hover/next:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative p-3 sm:p-4">
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-sm transition-transform duration-300 group-hover/next:translate-x-0.5" strokeWidth={2} />
                      </div>
                    </button>
                  </>
                )}

                {/* Indicadores */}
                <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 shadow-lg"></div>
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

        {/* Contenido del artículo */}
        {noticia.content && (
          <div className="relative mb-8">
            {/* Glass container */}
            <div className="absolute inset-0 bg-white/8 backdrop-blur-xl rounded-2xl border border-white/15 shadow-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/6 to-white/4 rounded-2xl"></div>
            
            {/* Reflejos */}
            <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            
            {/* Contenido */}
            <div className="relative p-6 sm:p-8">
              <div 
                className="prose prose-lg max-w-none text-white/90 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: noticia.content }}
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8'
                }}
              />
            </div>
          </div>
        )}

        {/* Información adicional en grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          
          {/* Columna principal - Información adicional */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            
            {/* Si hay información adicional que mostrar */}
            {(noticia.summary || noticia.highlights) && (
              <div className="relative">
                {/* Glass background */}
                <div className="absolute inset-0 bg-white/8 backdrop-blur-xl rounded-2xl border border-white/15 shadow-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/6 to-white/4 rounded-2xl"></div>
                
                {/* Reflejos */}
                <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                
                {/* Contenido */}
                <div className="relative p-6 sm:p-8">
                  {noticia.summary && (
                    <>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 drop-shadow-sm">
                        Resumen
                      </h3>
                      <p className="text-white/90 text-base sm:text-lg leading-relaxed drop-shadow-sm mb-6">
                        {noticia.summary}
                      </p>
                    </>
                  )}
                  
                  {noticia.highlights && (
                    <>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 drop-shadow-sm">
                        Puntos Destacados
                      </h3>
                      <ul className="text-white/90 space-y-2">
                        {noticia.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-white/60 mt-2">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Columna lateral - Detalles */}
          <div className="space-y-4 sm:space-y-6">
            
            {/* Detalles de la noticia */}
            <div className="relative">
              {/* Glass background */}
              <div className="absolute inset-0 bg-white/8 backdrop-blur-xl rounded-2xl border border-white/15 shadow-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/6 to-white/4 rounded-2xl"></div>
              
              {/* Reflejos */}
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              
              {/* Contenido */}
              <div className="relative p-6 sm:p-8 space-y-4 sm:space-y-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 drop-shadow-sm">
                  Detalles de la Noticia
                </h3>

                {/* Categoría */}
                {noticia.category && (
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-md"></div>
                    <div className="relative p-4 flex items-center space-x-3">
                      <div className="p-2 bg-white/15 rounded-lg">
                        <Tag className="w-4 h-4 sm:w-5 sm:h-5 text-white/90" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-white/70 text-xs sm:text-sm uppercase tracking-wider">Categoría</p>
                        <p className="text-white font-medium text-sm sm:text-base capitalize">{noticia.category}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Fecha */}
                {noticia.date && (
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-md"></div>
                    <div className="relative p-4 flex items-center space-x-3">
                      <div className="p-2 bg-white/15 rounded-lg">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white/90" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-white/70 text-xs sm:text-sm uppercase tracking-wider">Fecha</p>
                        <p className="text-white font-medium text-sm sm:text-base">{noticia.date}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Autor */}
                {noticia.author && (
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-md"></div>
                    <div className="relative p-4 flex items-center space-x-3">
                      <div className="p-2 bg-white/15 rounded-lg">
                        <User className="w-4 h-4 sm:w-5 sm:h-5 text-white/90" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-white/70 text-xs sm:text-sm uppercase tracking-wider">Autor</p>
                        <p className="text-white font-medium text-sm sm:text-base">{noticia.author}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tiempo de lectura */}
                {noticia.readTime && (
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-md"></div>
                    <div className="relative p-4 flex items-center space-x-3">
                      <div className="p-2 bg-white/15 rounded-lg">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white/90" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-white/70 text-xs sm:text-sm uppercase tracking-wider">Tiempo de lectura</p>
                        <p className="text-white font-medium text-sm sm:text-base">{noticia.readTime}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        {noticia.tags && noticia.tags.length > 0 && (
          <div className="relative">
            {/* Glass container */}
            <div className="absolute inset-0 bg-white/8 backdrop-blur-xl rounded-2xl border border-white/15 shadow-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/6 to-white/4 rounded-2xl"></div>
            
            {/* Contenido */}
            <div className="relative p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white mb-4 drop-shadow-sm">
                Etiquetas
              </h3>
              <div className="flex flex-wrap gap-3">
                {noticia.tags.map((tag, index) => (
                  <div key={index} className="relative">
                    <div className="absolute inset-0 bg-white/15 backdrop-blur-md rounded-full border border-white/25 shadow-md"></div>
                    <div className="relative px-4 py-2">
                      <span className="text-sm font-medium text-white/95">
                        #{tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Reflejos globales */}
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
      <div className="fixed top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white/3 to-transparent pointer-events-none"></div>
    </div>
  );
}