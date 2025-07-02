import React, { useState } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-[#686961] shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center  ">
          {/* Logo */}
          <div className="flex-shrink-0 border-none">
            <img 
              src="/miranda.jpeg" 
              alt="Paola Miranda Arquitecta" 
              className="h-26 w-auto md:h-26 transition-transform duration-300 border-none"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex mt- space-x-8">
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
          </nav>

          {/* Social Media Icons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/arqpaolamiranda/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white hover:text-pink-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <Facebook size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-white hover:text-gray-900 hover:bg-gray-100 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Menu SIEMPRE en el DOM */}
      <div
        className={`
          fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex justify-end items-center p-6 border-b border-gray-200">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-300"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-6">
              <li>
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className="block text-gray-700 hover:text-gray-900 font-medium text-lg uppercase tracking-wide transition-colors duration-300 py-2 border-b border-transparent hover:border-gray-300 relative group"
                >
                  Inicio
                            <span
                   className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300
                     ${location.pathname === '/' ? 'w-full bg-white' : 'w-0 bg-gray-900'}
                       group-hover:w-full group-hover:bg-gray-900`}
                      style={{ transitionProperty: 'width, background-color' }}
                       ></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/proyectos"
                  onClick={toggleMenu}
                  className="block text-gray-700 hover:text-gray-900 font-medium text-lg uppercase tracking-wide transition-colors duration-300 py-2 border-b border-transparent hover:border-gray-300 relative group"
                >
                  Proyectos
                     <span
                   className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300
                     ${location.pathname === '/proyectos' ? 'w-full bg-white' : 'w-0 bg-gray-900'}
                       group-hover:w-full group-hover:bg-gray-900`}
                      style={{ transitionProperty: 'width, background-color' }}
                       ></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/nosotros"
                  onClick={toggleMenu}
                  className="block text-gray-700 hover:text-gray-900 font-medium text-lg uppercase tracking-wide transition-colors duration-300 py-2 border-b border-transparent hover:border-gray-300 relative group"
                >
                  Nosotros
                    <span
                   className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300
                     ${location.pathname === '/nosotros' ? 'w-full bg-white' : 'w-0 bg-gray-900'}
                       group-hover:w-full group-hover:bg-gray-900`}
                      style={{ transitionProperty: 'width, background-color' }}
                       ></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/noticias"
                  onClick={toggleMenu}
                  className="block text-gray-700 hover:text-gray-900 font-medium text-lg uppercase tracking-wide transition-colors duration-300 py-2 border-b border-transparent hover:border-gray-300 relative group"
                >
                  Noticias
                      <span
                   className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300
                     ${location.pathname === '/noticias' ? 'w-full bg-white' : 'w-0 bg-gray-900'}
                       group-hover:w-full group-hover:bg-gray-900`}
                      style={{ transitionProperty: 'width, background-color' }}
                       ></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  onClick={toggleMenu}
                  className="block text-gray-700 hover:text-gray-900 font-medium text-lg uppercase tracking-wide transition-colors duration-300 py-2 border-b border-transparent hover:border-gray-300 relative group"
                >
                  Contacto
                     <span
                   className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300
                     ${location.pathname === '/contacto' ? 'w-full bg-white' : 'w-0 bg-white'}
                       group-hover:w-full group-hover:bg-white`}
                      style={{ transitionProperty: 'width, background-color' }}
                       ></span>
                </Link>
              </li>
              <Link
                  to="/Login"
                  onClick={toggleMenu}
                  className="block text-gray-700 hover:text-gray-900 font-medium text-lg uppercase tracking-wide transition-colors duration-300 py-2 border-b border-transparent hover:border-gray-300 relative group"
                >
                  Iniciar Sesion
                    <span
                   className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300
                     ${location.pathname === '/nosotros' ? 'w-full bg-white' : 'w-0 bg-gray-900'}
                       group-hover:w-full group-hover:bg-gray-900`}
                      style={{ transitionProperty: 'width, background-color' }}
                       ></span>
                </Link>
            </ul>
          </nav>

          {/* Mobile Social Media Icons */}
          <div className="px-6 py-6 border-t border-gray-200">
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.instagram.com/arqpaolamiranda/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-white hover:text-pink-600 transition-colors duration-300 hover:scale-110 transform bg-gray-50 rounded-full hover:bg-pink-50"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-white hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform bg-gray-50 rounded-full hover:bg-blue-50"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;