import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { autorization } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate()


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const Email = formData.email
  const Password = formData.password



  const  handleSubmit = async(e) => {
    e.preventDefault();
    try {
     const userCredentials = await signInWithEmailAndPassword(autorization, Email,Password )
      console.log("si hiciste bien pa sale aqui" + userCredentials)
      navigate("/login/AgregarDatos")
    } catch (error) {
      console.log(`si sale mal sale esto ${error}`)
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative w-full max-w-md" style={{ transform: 'scale(1)' }}>
        {/* Main Login Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-stone-200/50 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-stone-600 via-stone-500 to-stone-600 px-8 py-12 text-center relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              {/* Logo */}
              <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                <User className="w-10 h-10 text-stone-100" strokeWidth={1.5} />
              </div>
              
              {/* Brand */}
              <div className="space-y-2">
                <h1 className="text-3xl font-light text-stone-100 tracking-wider">
                  PAOLA MIRANDA
                </h1>
                <p className="text-stone-200/80 text-sm font-light tracking-[0.2em] uppercase">
                  Arquitecta
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="px-8 py-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-light text-stone-700 mb-2">Bienvenido</h2>
              <p className="text-stone-500 text-sm">Ingresa a tu cuenta</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-stone-600">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-stone-400" strokeWidth={1.5} />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-stone-50/50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-stone-400/50 focus:border-transparent transition-all duration-300 text-stone-700 placeholder-stone-400"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-stone-600">
                  Contraseña
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-stone-400" strokeWidth={1.5} />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-12 py-4 bg-stone-50/50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-stone-400/50 focus:border-transparent transition-all duration-300 text-stone-700 placeholder-stone-400"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-stone-400 hover:text-stone-600 transition-colors duration-200"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" strokeWidth={1.5} />
                    ) : (
                      <Eye className="h-5 w-5" strokeWidth={1.5} />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-stone-600 to-stone-500 text-white py-4 rounded-2xl font-medium hover:from-stone-700 hover:to-stone-600 focus:outline-none focus:ring-2 focus:ring-stone-400/50 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl mt-8"
              >
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-stone-500 text-xs">
            © 2025<a href='https://www.instagram.com/nathanaelborja_/' className='font-bold hover:text-black'> NathanaelBorja.</a> Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;