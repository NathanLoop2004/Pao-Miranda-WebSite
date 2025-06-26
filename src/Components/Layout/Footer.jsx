import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="w-full bg-[#686961] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Links */}
        <section className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-8">
           <Link
                        to="/"
                        className={`text-white hover:text-gray-900 font-medium text-sm uppercase tracking-wide transition-colors duration-300 relative group`}
                      >
                        Inicio
                        <span
                             className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300
                               ${location.pathname === '/' ? 'w-full bg-white' : 'w-0 bg-gray-900'}
                                 group-hover:w-full group-hover:bg-gray-900`}
                                style={{ transitionProperty: 'width, background-color' }}
                                 ></span>
                      </Link>
           <Link
                        to="/proyectos"
                        className={`text-white hover:text-gray-900 font-medium text-sm uppercase tracking-wide transition-colors duration-300 relative group`}
                      >
                        Proyectos
                        <span
                             className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300
                               ${location.pathname === '/proyectos' ? 'w-full bg-white' : 'w-0 bg-gray-900'}
                                 group-hover:w-full group-hover:bg-gray-900`}
                                style={{ transitionProperty: 'width, background-color' }}
                                 ></span>
                      </Link>
          <Link
                       to="/nosotros"
                       className={`text-white hover:text-gray-900 font-medium text-sm uppercase tracking-wide transition-colors duration-300 relative group`}
                      >
                       Nosotros
                       <span
                            className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300
                              ${location.pathname === '/nosotros' ? 'w-full bg-white' : 'w-0 bg-gray-900'}
                                group-hover:w-full group-hover:bg-gray-900`}
                               style={{ transitionProperty: 'width, background-color' }}
                                ></span>
                     </Link>
          <Link
                       to="/noticias"
                       className={`text-white hover:text-gray-900 font-medium text-sm uppercase tracking-wide transition-colors duration-300 relative group`}
                     >
                       Noticias
                       <span
                            className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300
                              ${location.pathname === '/noticias' ? 'w-full bg-white' : 'w-0 bg-gray-900'}
                                group-hover:w-full group-hover:bg-gray-900`}
                               style={{ transitionProperty: 'width, background-color' }}
                                ></span>
                     </Link>
           <Link
                        to="/contacto"
                        className={`text-white hover:text-gray-900 font-medium text-sm uppercase tracking-wide transition-colors duration-300 relative group`}
                      >
                        Contacto
                        <span
                             className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300
                               ${location.pathname === '/contacto' ? 'w-full bg-white' : 'w-0 bg-gray-900'}
                                 group-hover:w-full group-hover:bg-gray-900`}
                                style={{ transitionProperty: 'width, background-color' }}
                                 ></span>
                      </Link>
        </section>

        {/* Divider */}
        <hr className="border-white/30 mb-8" />

        {/* Description */}
        <section className="mb-8 text-center max-w-2xl mx-auto">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam,
            commodi optio pariatur est quia magnam eum harum corrupti
            dicta, aliquam sequi voluptate quas.
          </p>
        </section>

        {/* Social Icons (puedes reemplazar por íconos de lucide-react si quieres) */}
         <section className="flex justify-center gap-6 mb-8 text-2xl">
          <a href="#" className="hover:text-blue-700 transition" aria-label="Facebook">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-cyan-500 transition" aria-label="Twitter">
            <Twitter size={24} />
          </a>
          <a href="#" className="hover:text-fuchsia-500 transition" aria-label="Instagram">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-blue-700 transition" aria-label="Linkedin">
            <Linkedin size={24} />
          </a>
          <a href="#" className="hover:text-red-600 transition" aria-label="Mail">
            <Mail size={24} />
          </a>
        </section>
      </div>
      {/* Copyright */}
      <div className="text-center py-4 bg-black/20 w-full">
        © 2024 Copyright:
        <a className="text-white underline ml-1" href="https://www.instagram.com/nathanaelborja_/" target="_blank" rel="noopener noreferrer">NathanaelBorja</a>
      </div>
    </footer>
  )
}
