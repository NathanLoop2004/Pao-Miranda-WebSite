import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'
import NoticiasCard from '../noticias/NoticiasCard' // Ajusta la ruta si es necesario
import InicioCards from './InicioCards' // Asegúrate de que la ruta sea correcta

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
    <>
      <div className="w-full min-h-screen bg-[#191a17] flex items-center justify-center py-8">
        <div
          className="
             border-white w-[100%] max-w-7xl mx-[10%]  
            grid gap-4
            grid-cols-1 grid-rows-9 
            md:grid-cols-2 md:grid-rows-6
            lg:grid-cols-3 lg:grid-rows-4
            xl:grid-cols-4 xl:grid-rows-3
            h-[2200px]  md:h-[1500px] lg:h-[1200px] xl:h-[900px] xl:mx-[0%]
            transition-all
          "
        >
          {/* Mantén el orden y los spans */}
          <div className="bg-white row-span-1 col-span-1 md:row-span-2 md:col-span-2 w-full md:h-full relative animate-fadeInUp transition-transform hover:scale-[1.03] hover:shadow-2xl duration-300">
            <img src="/FondoModerno.png" className="w-full h-full absolute" />
            <div className="bg-black/70 absolute w-full h-full"></div>
          </div>

          {/* itera solo 7 imágenes */}
          {imagenes.slice(0, 7).map((img, idx) => (
            <InicioCards key={img.id || idx} project={img} />
          ))}

          {/* div que no se cambia */}
          <div className="bg-white w-full h-full animate-fadeInUp transition-transform hover:scale-[1.03] hover:shadow-2xl duration-300 ion-transform"></div>
        </div>
      </div>
    </> 
  ) 
}

