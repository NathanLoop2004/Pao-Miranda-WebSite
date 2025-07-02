import React from 'react'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <div className='w-[100%] h-[1500px] lg:h-[600px] bg-[#191a17]'>
      <div className="border-white mx-auto w-[82%] lg:w-[98%] xl:w-[84%] h-[90%] relative flex flex-col justify-around lg:flex-row">

        {/* Section mapa */}
        <section
          className='pt-4 border-white h-133 lg:w-[50%]'
          style={{ animation: 'fadeInUp 0.6s ease-out forwards' }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24268.77048735383!2d-57.63140488559548!3d-25.28490142429445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da7f2358d412f%3A0x4ad538d9d71078e!2sPante%C3%B3n%20Nacional%20de%20los%20H%C3%A9roes%20y%20Oratorio%20a%20Nuestra%20Se%C3%B1ora%20Santa%20Mar%C3%ADa%20de%20la%20Asunci%C3%B3n!5e0!3m2!1ses-419!2spy!4v1750947407387!5m2!1ses-419!2spy"
            className='w-[100%] h-[55%] lg:h-[70%]'
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Section Titulo */}
          <div
            className='bg-white w-[100%] h-[45%] lg:h-[30%] flex justify-center'
            style={{ animation: 'fadeInUp 0.6s ease-out forwards' }}
          >
            <h1 className='font-[Montserrat,sans-serif] text-[24px] md:text-[30px] lg:text-[20px] lg:mt-5 leading-7 mx-11 mt-8 md:mt-15 text-justify tracking-tight text-[#1c242c]'>
              Si quieres trabajar con nosotros, solo déjanos una línea. Nos pondremos en contacto lo antes posible.
            </h1>
          </div>
        </section>

        <section
          className="relative h-67 w-[310px] border-white md:h-[20%] md:mx-auto lg:h-[40%] xl:h-[43%] lg:mt-4 lg:ml-5 md:-[100%]"
          style={{ animation: 'fadeInUp 0.6s ease-out forwards' }}
        >
          {/* Imagen de fondo */}
          <div className="absolute inset-0 bg-[url('/FondoModerno.png')] bg-contain bg-center bg-no-repeat opacity-70 z-0"></div>
          {/* Overlay negro encima */}
          <div className="absolute inset-0 bg-black z-10 opacity-30"></div>
          {/* Contenido encima de ambos */}
          <h1 className="absolute inset-0 flex z-20 text-white text-[25px] lg:text-[22px] lg:top-19 top-22 left-6 font-[Montserrat,sans-serif]">
            Dirección
          </h1>
          <img className='absolute inset-0 z-20 top-9 left-6 lg:w-10 lg:top-7' src='/icons8-location-48.png' />
        </section>

        <section style={{ animation: 'fadeInUp 0.6s ease-out forwards' }}>
          <ContactForm />
        </section>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
