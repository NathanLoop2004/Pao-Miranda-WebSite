import { MapPin, Calendar } from 'lucide-react';

export default function ProyectoCard({ project }) {
  return (
    <div
      className="bg-white  shadow-lg overflow-hidden  border-stone-200 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group"
      style={{
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      {/* Imagen */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.images?.[0]?.url || "https://via.placeholder.com/400x300?text=Sin+imagen"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Badge de categoría */}
        <div className="absolute top-4 left-4">
          <span className={`
            px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border
            ${project.category === 'Residencial' ? 'bg-green-500/80 text-white border-green-400/50' :
              project.category === 'Comercial' ? 'bg-blue-500/80 text-white border-blue-400/50' :
              'bg-purple-500/80 text-white border-purple-400/50'}
          `}>
            {project.category}
          </span>
        </div>
      </div>
      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-stone-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {project.title}
        </h3>
        <div className="space-y-2 text-sm text-stone-600">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-stone-400" strokeWidth={1.5} />
            <span>{project.date}</span>
            <span className="mx-2">•</span>
            <span>Área: {project.area} m²</span>
          </div>
          <div>
            <span className="text-stone-500">{project.description}</span>
          </div>
        </div>
        {/* Botón de acción */}
        <div className="mt-4 pt-4 border-t border-stone-100">
          <button className="w-full bg-stone-50 hover:bg-blue-50 text-stone-700  py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium border border-stone-200 hover:border-blue-200">
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
}