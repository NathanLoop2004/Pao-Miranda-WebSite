import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function ContactForm() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [tipoConsulta, setTipoConsulta] = useState("Selecciona tipo de consulta");
  const opciones = [
    "Soporte Técnico",
    "Consulta Comercial",
    "Sugerencia",
    "Otro"
  ];

  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const data = new FormData(form);

    // Prepara los datos para enviar como JSON
    const payload = {
      nombre: data.get('nombre'),
      email: data.get('email'),
      mensaje: data.get('mensaje'),
      tipoConsulta: data.get('tipoConsulta'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert('¡Mensaje enviado!');
        form.reset();
        setTipoConsulta("Selecciona tipo de consulta");
      } else {
        alert('Error al enviar el mensaje.');
      }
    } catch (err) {
      alert('Error de red.');
    }
  };

  return (
    <div className="bg-white p-8  border-white rounded shadow-md w-full lg:w-[90%] lg:mt-4 max-w-md mx-auto transition-all duration-300 transform hover:scale-[1.02] group"
    style={{
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    
    >
      <h2 className="text-2xl font-semibold mb-6 text-[#1c242c]">Contáctenos</h2>
      <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
        {/* Tipo de consulta */}
        <div className="relative">
          {/* Campo select oculto para enviar con form-data */}
          <select
            name="tipoConsulta"
            value={tipoConsulta}
            readOnly
            hidden
            tabIndex={-1}
            aria-hidden="true"
          >
            <option value="">Selecciona tipo de consulta</option>
            {opciones.map((opcion) => (
              <option key={opcion} value={opcion}>{opcion}</option>
            ))}
          </select>
          <button
            type="button"
            className="w-full flex justify-between items-center border-b border-gray-300 py-3 text-gray-500 focus:outline-none"
            onClick={() => setDropdownOpen((open) => !open)}
          >
            <span>{tipoConsulta}</span>
            <ChevronDown
              className={`ml-2 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
              size={20}
            />
          </button>
          {dropdownOpen && (
            <ul className="absolute left-0 right-0 bg-white border border-gray-200 rounded shadow z-10 mt-1">
              {opciones.map((opcion) => (
                <li
                  key={opcion}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                  onClick={() => {
                    setTipoConsulta(opcion);
                    setDropdownOpen(false);
                  }}
                >
                  {opcion}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Campo oculto para tipo de consulta */}
        <input
          type="hidden"
          name="tipoConsulta"
          value={tipoConsulta}
        />
        {/* Nombre */}
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          className="w-full border-b border-gray-300 py-3 text-gray-500 focus:outline-none"
          required
        />
        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border-b border-gray-300 py-3 text-gray-500 focus:outline-none"
          required
        />
        {/* Mensaje */}
        <textarea
          name="mensaje"
          placeholder="Escríbenos qué piensas"
          className="w-full border-b border-gray-300 py-3 text-gray-500 focus:outline-none resize-none"
          rows={3}
          required
        />
        {/* Botón enviar */}
        <div className="flex items-center justify-end gap-2 mt-4">
          <button
            type="submit"
            className="text-[#1c242c] italic hover:underline focus:outline-none"
          >
            Enviar
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#1c242c"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
      </form>
    </div>
  );
}