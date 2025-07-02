import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { MapPin, Calendar, Building, Users, Award, Briefcase, FileText } from 'lucide-react';
import ProyectoCard from './ProyectoCard'; // Ajusta la ruta si es necesario

const categories = [
  { id: 'todos', label: 'Todos', icon: null }, // <-- Botón de todos
  { id: 'Residencial', label: 'Residencial', icon: Building },
  { id: 'Comercial', label: 'Comercial', icon: Briefcase },
  { id: 'Institucional', label: 'Institucional', icon: Award },
  { id: 'Restauración', label: 'Restauración', icon: Users },
  { id: 'Interiorismo', label: 'Interiorismo', icon: FileText },
  { id: 'Urbanismo', label: 'Urbanismo', icon: MapPin }
];

export default function Proyectos() {
  const [proyectos, setProyectos] = useState([]);
  const [activeFilter, setActiveFilter] = useState('todos');

  useEffect(() => {
    const fetchProyectos = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      console.log("Proyectos desde Firestore:", data); // <-- Aquí el log
      setProyectos(data);
    };
    fetchProyectos();
  }, []);

  // Filtrado si lo necesitas
  const filteredProyectos = activeFilter === 'todos'
    ? proyectos
    : proyectos.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#191a17]">
    
    

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Título de sección */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
            Portafolio de Proyectos
          </h2>
          <p className="text-stone-200 max-w-2xl mx-auto">
            Explora nuestra colección de proyectos arquitectónicos organizados por categorías
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-12">
          <div className="bg-white  shadow-lg p-6 border border-stone-200">
            <h3 className="text-lg font-medium text-stone-700 mb-6 flex items-center">
              <Building className="w-5 h-5 mr-2" strokeWidth={1.5} />
              Ver por categorías
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`
                      p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
                      flex flex-col items-center space-y-2 text-center
                      ${activeFilter === category.id
                        ? 'bg-[#686961] border-[#686961] text-white shadow-lg'
                        : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100 hover:border-stone-300'
                      }
                    `}
                  >
                    {IconComponent
                      ? <IconComponent className={`w-6 h-6 ${activeFilter === category.id ? 'text-white' : 'text-stone-600'}`} strokeWidth={1.5} />
                      : <span className={`w-6 h-6 flex items-center justify-center font-bold text-lg ${activeFilter === category.id ? 'text-white' : 'text-stone-600'}`}>★</span>
                    }
                    <span className="text-sm font-medium">{category.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProyectos.map((project) => (
            <ProyectoCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mensaje cuando no hay resultados */}
        {filteredProyectos.length === 0 && (
          <div className="text-center py-12">
            <Building className="w-16 h-16 text-stone-400 mx-auto mb-4" strokeWidth={1} />
            <h3 className="text-xl font-medium text-stone-600 mb-2">
              No hay proyectos en esta categoría
            </h3>
            <p className="text-stone-500">
              Selecciona otra categoría para ver más proyectos
            </p>
          </div>
        )}

        {/* Contador de resultados */}
        <div className="text-center mt-8">
          <p className="text-white">
            Mostrando <span className="font-semibold text-blue-600">{filteredProyectos.length}</span> de <span className="font-semibold">{proyectos.length}</span> proyectos
          </p>
        </div>

      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

