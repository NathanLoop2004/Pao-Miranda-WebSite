import { Link } from 'react-router-dom';

export default function InicioCards({ project }) {
  return (
    <div className="bg-white shadow-lg overflow-hidden flex flex-col transition-transform hover:scale-[1.03] hover:shadow-2xl duration-300 animate-fadeInUp">
      {/* Imagen principal */}
      {project.images && project.images.length > 0 && (
        <div className="h-44 w-full bg-stone-200 overflow-hidden">
          <img
            src={project.images[0].url || project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      {/* Contenido */}
      <div className="p-5 flex flex-col flex-1">
        <span className="inline-block bg-[#686961] text-white text-xs px-3 py-1 rounded-full mb-2 self-start uppercase tracking-widest">
          {project.category}
        </span>
        <h3 className="text-xl font-semibold text-stone-800 mb-2 line-clamp-2">{project.title}</h3>
        <p className="text-stone-600 text-sm mb-4 line-clamp-3">{project.description}</p>
        <div className="flex items-center justify-between mt-auto mb-2">
          <span className="text-xs text-stone-500">
            {project.date}
          </span>
          <span className="text-xs text-stone-500">
            Área: {project.area} m²
          </span>
        </div>
        <Link
          to={`/proyectos/${project.id}`}
          className="mt-2 inline-block bg-[#686961] text-white text-xs px-4 py-2 rounded hover:bg-[#44453f] transition-colors text-center"
        >
          Ver proyecto
        </Link>
      </div>
    </div>
  );
}