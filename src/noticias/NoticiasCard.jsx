import { Calendar, Tag, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom'; // Agrega esto

export default function NoticiasCard({ project }) {
  return (
    <div className="group relative bg-transparent rounded-2xl overflow-hidden flex flex-col w-full 
                    h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80
                    transition-all duration-700 hover:scale-[1.02] animate-fadeInUp">
      {/* Imagen de fondo completa */}
      {project.images && project.images.length > 0 && (
        <div className="absolute inset-0 w-full h-full">
          <img
            src={project.images[0].url || project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-110"
          />
          
          {/* Overlay gradient más sutil para mejor visibilidad de la foto */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
          
          {/* Efecto de brillo sutil */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      )}

      {/* Contenido con efecto liquid glass - responsive */}
      <div className="relative z-10 p-2 sm:p-3 md:p-4 flex flex-col justify-end h-full">
        
        {/* Glass container principal - responsive */}
        <div className="relative">
          {/* Fondo glass con múltiples capas */}
          <div className="absolute inset-0 bg-white/12 backdrop-blur-lg rounded-lg sm:rounded-xl border border-white/15 shadow-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/8 to-white/3 rounded-lg sm:rounded-xl"></div>
          
          {/* Reflejos líquidos */}
          <div className="absolute top-0 left-2 right-2 sm:left-3 sm:right-3 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          
          {/* Contenido responsive */}
          <div className="relative p-2 sm:p-3 space-y-1 sm:space-y-2">
            {/* Badge de categoría responsive */}
            <div className="inline-flex items-center space-x-1 sm:space-x-1.5 bg-white/15 backdrop-blur-md 
                           px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-white/25 shadow-md mb-1">
              <Tag className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white/90" strokeWidth={2} />
              <span className="text-xs font-semibold text-white/95 uppercase tracking-wider">
                {project.category}
              </span>
            </div>
            
            {/* Título responsive */}
            <h3 className="text-xs sm:text-sm md:text-base font-bold text-white leading-tight line-clamp-1 sm:line-clamp-2 drop-shadow-lg">
              {project.title}
            </h3>
            
            {/* Fecha con glass effect responsive */}
            <div className="inline-flex items-center space-x-1 sm:space-x-1.5 bg-white/15 backdrop-blur-md 
                           px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-white/25 shadow-md">
              <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white/90" strokeWidth={2} />
              <span className="text-xs font-semibold text-white/95">
                {project.date}
              </span>
            </div>
          </div>
        </div>

        {/* Botón con liquid glass responsive */}
        <div className="mt-1.5 sm:mt-2">
          <Link
            to={`/noticias/${project.id}`}
            className="group/btn relative block w-full overflow-hidden rounded-lg sm:rounded-xl 
                       transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
          >
            {/* Fondo glass del botón */}
            <div className="absolute inset-0 bg-white/15 backdrop-blur-lg border border-white/25 rounded-lg sm:rounded-xl shadow-lg"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-lg sm:rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            
            {/* Efecto líquido en hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 rounded-lg sm:rounded-xl"></div>
            
            {/* Reflejos del botón */}
            <div className="absolute top-0 left-2 right-2 sm:left-3 sm:right-3 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            
            {/* Contenido del botón responsive */}
            <div className="relative px-3 py-1.5 sm:px-4 sm:py-2 flex items-center justify-center space-x-1 sm:space-x-1.5">
              <span className="text-white font-medium text-xs sm:text-sm drop-shadow-sm">
                Leer más
              </span>
              <ExternalLink 
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white/90 transition-transform duration-300 
                          group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 drop-shadow-sm" 
                strokeWidth={2} 
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Borde exterior con efecto glass */}
      <div className="absolute inset-0 rounded-2xl border border-white/8 pointer-events-none"></div>
      
      {/* Reflejo superior más sutil */}
      <div className="absolute top-0 left-0 right-0 h-16 sm:h-20 md:h-24 bg-gradient-to-b from-white/8 to-transparent rounded-t-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}