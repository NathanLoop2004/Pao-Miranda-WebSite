import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

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
    return <div className="text-center text-white py-12">Cargando proyecto...</div>;
  }

  return (
    <div className="w-full mx-auto py-12 px-4 text-white bg-[#191a17]">
      {/* Carrusel de imágenes */}
      {images.length > 0 && (
        <div className="relative w-full mb-6">
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img.url || img}
                  className="block w-full h-full object-cover flex-shrink-0 flex-grow-0"
                  alt={proyecto.title}
                  style={{ width: "100%", height: "100%" }}
                />
              ))}
            </div>
          </div>
          {/* Slider indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`w-3 h-3 rounded-full ${idx === current ? 'bg-stone-800' : 'bg-stone-300'}`}
                aria-current={idx === current}
                aria-label={`Slide ${idx + 1}`}
                onClick={() => goTo(idx)}
              />
            ))}
          </div>
          {/* Slider controls */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handlePrev}
                aria-label="Anterior"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                  <svg className="w-4 h-4 text-white" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handleNext}
                aria-label="Siguiente"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                  <svg className="w-4 h-4 text-white" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </>
          )}
        </div>
      )}

      <h1 className="text-3xl font-bold mb-4">{proyecto.title}</h1>
      <p className="mb-4">{proyecto.description}</p>
      <div className="flex gap-4 text-sm text-stone-600 mb-2">
        <span>Categoría: {proyecto.category}</span>
        <span>Área: {proyecto.area} m²</span>
        <span>Fecha: {proyecto.date}</span>
      </div>
      {/* Puedes agregar más detalles aquí */}
    </div>
  );
}