import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { Newspaper, Award, BookOpen, Calendar, Users, Star } from 'lucide-react'; // Usa estos iconos
import NoticiasCard from './NoticiasCard';

// Define tus categorías con iconos
const categories = [
  { id: 'todos', label: 'Todos', icon: Star },
  { id: 'proyectos', label: 'Proyectos', icon: Newspaper },
  { id: 'reconocimientos', label: 'Reconocimientos', icon: Award },
  { id: 'publicaciones', label: 'Publicaciones', icon: BookOpen },
  { id: 'eventos', label: 'Eventos', icon: Calendar },
  { id: 'colaboraciones', label: 'Colaboraciones', icon: Users }
];

export default function Noticias() {
  const [proyectos, setProyectos] = useState([]);
  const [activeFilter, setActiveFilter] = useState('todos');

  useEffect(() => {
    const fetchNoticias = async () => {
      const querySnapshot = await getDocs(collection(db, "news"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProyectos(data);
    };
    fetchNoticias();
  }, []);

  const filteredProyectos = activeFilter === 'todos'
    ? proyectos
    : proyectos.filter(
        p => p.category && p.category.toLowerCase() === activeFilter
      );

  return (
    <div className="min-h-screen bg-[#191a17]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Título de sección */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
            Noticias y Actualizaciones
          </h2>
          <p className="text-stone-200 max-w-2xl mx-auto">
            Explora las últimas noticias, reconocimientos y eventos.
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-12">
          <div className="bg-white shadow-lg p-6 border border-stone-200">
            <h3 className="text-lg font-medium text-stone-700 mb-6 flex items-center">
              <Newspaper className="w-5 h-5 mr-2" strokeWidth={1.5} />
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
                    {IconComponent &&
                      <IconComponent className={`w-6 h-6 ${activeFilter === category.id ? 'text-white' : 'text-stone-600'}`} strokeWidth={1.5} />
                    }
                    <span className="text-sm font-medium">{category.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Grid de noticias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProyectos.map((project) => (
            <NoticiasCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mensaje cuando no hay resultados */}
        {filteredProyectos.length === 0 && (
          <div className="text-center py-12">
            <Newspaper className="w-16 h-16 text-stone-400 mx-auto mb-4" strokeWidth={1} />
            <h3 className="text-xl font-medium text-stone-600 mb-2">
              No hay noticias en esta categoría
            </h3>
            <p className="text-stone-500">
              Selecciona otra categoría para ver más noticias
            </p>
          </div>
        )}

        {/* Contador de resultados */}
        <div className="text-center mt-8">
          <p className="text-white">
            Mostrando <span className="font-semibold text-blue-600">{filteredProyectos.length}</span> de <span className="font-semibold">{proyectos.length}</span> noticias
          </p>
        </div>
      </div>
    </div>
  );
}

