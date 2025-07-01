import React from 'react'
import { useState } from 'react'

export default function Nosotros() {

    const [hovered, setHovered] = useState(false)


  return (
      <div className='w-[100%] h-[1500px] lg:h-[1000px] bg-[#191a17]'>
      

     <div className=" border-white w-[80%] lg:w-[85%] xl:w-[80%] mx-auto h-[1450px] lg:h-[600px] pt-4 flex flex-col lg:flex-row lg:gap-5">

      {/* Section Foto Miranda */}
          <section className='border-7 border-white w-[100%] h-[20%] lg:h-[75%] md:h-[30%] relative'>
              <img src='ImagenNosotros.png' className='w-[100%] h-[100%] absolute'/>
              <div className='w-[100%] h-[100%] bg-black absolute opacity-65 z-10'></div>
              <h1 style={{ fontFamily: 'Roboto, sans-serif' }} className="absolute z-11 text-white mx-8  text-[19px] md:text-[27px] mt-[8%] md:mt-[15%]">Desde 2015 trabaja de forma independiente y colaborando en la empresa constructora familiar, desarrollando proyectos de arquitectura, diseño funcional y fiscalización de obras.</h1>
          </section>


    
    {/* Section yo */}
<section
  className="border-white bg-[#686961] w-[100%] h-[18%] md:h-[32%] lg:h-[75%] mt-8 lg:mt-0 relative overflow-hidden"
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>
  <img
    src="/PaoMiranda.png"
    alt=""
    className={`w-[100%] h-[100%] absolute transition-all  duration-500 ${hovered ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`}
    style={{ zIndex: 10 }}
  />
  <div
    className={`absolute inset-0 flex flex-col  transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    style={{ zIndex: 20 }}
  >
    <h1
      className="text-white text-[18px] md:text-[25px] md:left-12 absolute left-8 top-9"
      style={{ fontFamily: 'Roboto, sans-serif' }}
    >
      Arquitecta
    </h1>
    <p
      className="text-white text-[30px] md:text-[45px] font-bold left-8 md:left-12 top-13 md:top-15 absolute "
      style={{ fontFamily: 'Roboto, sans-serif' }}
    >
      Paola Miranda
    </p>
  </div>
</section>

 <section className='bg-[#686961] border-white w-[100%] h-[60%] lg:h-[75%] md:h-[33%] mt-9 lg:hidden'>
              
              <h1 style={{ fontFamily: 'Roboto, sans-serif' }} className="absolute z-11 text-white ml-5 mr-15 mt-8 md:mr-20 text-[11.5px] md:mt-5 md:text-[13.5px] ">¡Hola! Soy Paola Miranda, arquitecta apasionada por el diseño funcional, humano y sostenible. Desde muy pequeña estuve rodeada del mundo de la construcción gracias a la empresa de mis padres, y crecí viendo cómo una obra puede transformar la vida de las personas. Con los años, descubrí que mi verdadera vocación no era solo diseñar estructuras, sino crear espacios que cuenten historias y se adapten a los sueños y necesidades de quienes los habitan.

Mi camino no ha sido lineal, y eso es parte de lo que me hace entender tan bien a mis clientes. En el décimo semestre de la carrera, tuve a mi primer hijo, quien me acompañó entre planos y clases para terminar mis estudios. Más tarde, defendí mi tesis embarazada de siete meses de mi segundo hijo. Desde entonces, he combinado la maternidad con el ejercicio profesional, creando proyectos personalizados, humanos y con propósito.

Cuento con más de 8 años de experiencia en el ámbito de la construcción, abarcando diseño arquitectónico, obras privadas, públicas y dirección técnica. En el área de fiscalización, he liderado más de 160 proyectos viales y edilicios, asegurando la calidad, el cumplimiento de normativas y la buena coordinación con instituciones, proveedores y comunidades.

Además, cuento con un posgrado en patologías constructivas, lo que me permite identificar y resolver problemas como humedad, fisuras y fallas estructurales, garantizando soluciones duraderas y seguras para mis clientes.

Me sigo formando constantemente en herramientas como BIM, sustentabilidad, planificación territorial y gestión empresarial, porque creo que una buena profesional nunca deja de aprender.

Me defino como una persona empática, con principios claros y compromiso ético. Me importa el problema, el sueño y la historia de cada persona que llega a mí. Tu proyecto no es uno más: para mí es personal, es importante, y merece toda mi atención y dedicación.

Gracias por estar acá. Me encantaría acompañarte a construir el espacio que estás imaginando.</h1>
          </section>


</div>

  {/* Section Me */}
<div className='bg-[#686961] w-[80%] mx-auto h-[45%] mt-[-120px] hidden lg:flex'>

<h1 style={{ fontFamily: 'Roboto, sans-serif' }} className="absolute z-11 text-white ml-5 mr-15 mt-8 md:mr-35 text-[11.5px] md:mt-5 md:text-[15px] xl:mr-40 xl:text-[18px] ">¡Hola! Soy Paola Miranda, arquitecta apasionada por el diseño funcional, humano y sostenible. Desde muy pequeña estuve rodeada del mundo de la construcción gracias a la empresa de mis padres, y crecí viendo cómo una obra puede transformar la vida de las personas. Con los años, descubrí que mi verdadera vocación no era solo diseñar estructuras, sino crear espacios que cuenten historias y se adapten a los sueños y necesidades de quienes los habitan.

Mi camino no ha sido lineal, y eso es parte de lo que me hace entender tan bien a mis clientes. En el décimo semestre de la carrera, tuve a mi primer hijo, quien me acompañó entre planos y clases para terminar mis estudios. Más tarde, defendí mi tesis embarazada de siete meses de mi segundo hijo. Desde entonces, he combinado la maternidad con el ejercicio profesional, creando proyectos personalizados, humanos y con propósito.

Cuento con más de 8 años de experiencia en el ámbito de la construcción, abarcando diseño arquitectónico, obras privadas, públicas y dirección técnica. En el área de fiscalización, he liderado más de 160 proyectos viales y edilicios, asegurando la calidad, el cumplimiento de normativas y la buena coordinación con instituciones, proveedores y comunidades.

Además, cuento con un posgrado en patologías constructivas, lo que me permite identificar y resolver problemas como humedad, fisuras y fallas estructurales, garantizando soluciones duraderas y seguras para mis clientes.

Me sigo formando constantemente en herramientas como BIM, sustentabilidad, planificación territorial y gestión empresarial, porque creo que una buena profesional nunca deja de aprender.

Me defino como una persona empática, con principios claros y compromiso ético. Me importa el problema, el sueño y la historia de cada persona que llega a mí. Tu proyecto no es uno más: para mí es personal, es importante, y merece toda mi atención y dedicación.

Gracias por estar acá. Me encantaría acompañarte a construir el espacio que estás imaginando.</h1>



</div>







    </div>
  )
}
