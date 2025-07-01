import React, { useState } from 'react';
import { Plus, X, Upload, Calendar, Tag, FileText, Image, Trash2, Loader2 } from 'lucide-react';
import { saveProject, saveNews } from '../firebase/services';

const ImageUploadArea = ({ images, onImageUpload, onRemoveImage, formType }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    onImageUpload(files, formType);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files) {
      onImageUpload(files, formType);
    }
  };

  return (
    <div>
      <div 
        className="border-2 border-dashed border-stone-300 rounded-sm p-8 text-center hover:border-stone-400 transition-colors"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <Upload size={32} className="mx-auto text-stone-400 mb-4" />
        <p className="text-stone-600 mb-2">Arrastra las imágenes aquí o</p>
        <label className="bg-stone-100 text-stone-700 px-4 py-2 rounded-sm hover:bg-stone-200 transition-colors cursor-pointer inline-block">
          Seleccionar archivos
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
        </label>
        <p className="text-xs text-stone-500 mt-2">PNG, JPG hasta 10MB cada una</p>
        {images.length > 0 && (
          <p className="text-sm text-stone-600 mt-2 font-medium">
            ✓ {images.length} imagen{images.length !== 1 ? 'es' : ''} seleccionada{images.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      {/* Preview de imágenes seleccionadas */}
      {images.length > 0 && (
        <div className="mt-6">
          <h4 className="text-sm font-medium text-stone-700 mb-3">
            Imágenes seleccionadas ({images.length})
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative group">
                <div className="aspect-square bg-stone-100 rounded-sm overflow-hidden">
                  <img
                    src={image.preview}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => onRemoveImage(index, formType)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                >
                  <Trash2 size={14} />
                </button>
                <p className="text-xs text-stone-600 mt-1 truncate">
                  {image.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Modal = ({ isOpen, onClose, title, children, isLoading }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-light text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            disabled={isLoading}
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

function AgregarDatos() {
  console.log("AgregarDatos renderizado");

  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [projectForm, setProjectForm] = useState({
    title: '',
    description: '',
    date: '',
    category: '',
    images: []
  });
  const [newsForm, setNewsForm] = useState({
    title: '',
    description: '',
    date: '',
    category: '',
    images: []
  });

  const categories = [
    'Residencial',
    'Comercial',
    'Institucional',
    'Restauración',
    'Interiorismo',
    'Urbanismo'
  ];

  const newsCategories = [
    'Proyectos',
    'Reconocimientos',
    'Publicaciones',
    'Eventos',
    'Colaboraciones'
  ];

  const handleImageUpload = (files, formType) => {
    const newImages = Array.from(files).map(file => ({
      file,
      preview: URL.createObjectURL(file),
      name: file.name
    }));

    if (formType === 'project') {
      setProjectForm(prev => ({
        ...prev,
        images: [...prev.images, ...newImages]
      }));
    } else {
      setNewsForm(prev => ({
        ...prev,
        images: [...prev.images, ...newImages]
      }));
    }
  };

  const removeImage = (index, formType) => {
    if (formType === 'project') {
      const newImages = [...projectForm.images];
      URL.revokeObjectURL(newImages[index].preview);
      newImages.splice(index, 1);
      setProjectForm(prev => ({ ...prev, images: newImages }));
    } else {
      const newImages = [...newsForm.images];
      URL.revokeObjectURL(newImages[index].preview);
      newImages.splice(index, 1);
      setNewsForm(prev => ({ ...prev, images: newImages }));
    }
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await saveProject(projectForm);
      
      if (result.success) {
        alert(`¡Proyecto guardado exitosamente! Se subieron ${projectForm.images.length} imágenes.`);
        
        // Limpiar URLs de objeto para evitar memory leaks
        projectForm.images.forEach(img => URL.revokeObjectURL(img.preview));
        setProjectForm({ title: '', description: '', date: '', category: '', images: [] });
        setIsProjectModalOpen(false);
      } else {
        alert(`Error al guardar el proyecto: ${result.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error inesperado al guardar el proyecto');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewsSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await saveNews(newsForm);
      
      if (result.success) {
        alert(`¡Noticia guardada exitosamente! Se subieron ${newsForm.images.length} imágenes.`);
        
        // Limpiar URLs de objeto para evitar memory leaks
        newsForm.images.forEach(img => URL.revokeObjectURL(img.preview));
        setNewsForm({ title: '', description: '', date: '', category: '', images: [] });
        setIsNewsModalOpen(false);
      } else {
        alert(`Error al guardar la noticia: ${result.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error inesperado al guardar la noticia');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-stone-600 rounded-sm flex items-center justify-center">
                <span className="text-stone-100 text-3xl font-light">PM</span>
              </div>
              <h1 className="text-2xl font-light text-stone-800 tracking-wide">
                PAOLA MIRANDA
              </h1>
              <p className="text-stone-600 text-sm tracking-widest uppercase mt-1">
                ARQUITECTA
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Agregar Proyectos */}
          <div className="bg-white rounded-lg shadow-lg border border-stone-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-stone-100 rounded-full flex items-center justify-center">
                  <Plus size={24} className="text-stone-600" />
                </div>
                <h2 className="text-2xl font-light text-stone-800 mb-4">
                  Agregar Proyectos
                </h2>
                <p className="text-stone-600 mb-8 leading-relaxed">
                  Comparte tus últimos proyectos arquitectónicos con detalles completos
                  y documentación visual.
                </p>
                <button
                  onClick={() => setIsProjectModalOpen(true)}
                  className="bg-stone-600 text-white px-8 py-3 rounded-sm hover:bg-stone-700 transition-colors duration-200 font-light tracking-wide uppercase text-sm"
                  disabled={isLoading}
                >
                  Nuevo Proyecto
                </button>
              </div>
            </div>
          </div>

          {/* Agregar Noticias */}
          <div className="bg-white rounded-lg shadow-lg border border-stone-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-stone-100 rounded-full flex items-center justify-center">
                  <FileText size={24} className="text-stone-600" />
                </div>
                <h2 className="text-2xl font-light text-stone-800 mb-4">
                  Agregar Noticias
                </h2>
                <p className="text-stone-600 mb-8 leading-relaxed">
                  Mantén actualizada tu comunidad con las últimas noticias,
                  reconocimientos y eventos.
                </p>
                <button
                  onClick={() => setIsNewsModalOpen(true)}
                  className="bg-stone-600 text-white px-8 py-3 rounded-sm hover:bg-stone-700 transition-colors duration-200 font-light tracking-wide uppercase text-sm"
                  disabled={isLoading}
                >
                  Nueva Noticia
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Project Modal */}
      <Modal
        isOpen={isProjectModalOpen}
        onClose={() => !isLoading && setIsProjectModalOpen(false)}
        title="Nuevo Proyecto"
      >
        <form onSubmit={handleProjectSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              <Calendar size={16} className="inline mr-2" />
              Fecha de Publicación
            </label>
            <input
              type="date"
              value={projectForm.date}
              onChange={(e) => setProjectForm({...projectForm, date: e.target.value})}
              className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-all"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              <FileText size={16} className="inline mr-2" />
              Título del Proyecto
            </label>
            <input
              type="text"
              value={projectForm.title}
              onChange={(e) => setProjectForm({...projectForm, title: e.target.value})}
              className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-all"
              placeholder="Ej: Casa Residencial Moderna"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              <Tag size={16} className="inline mr-2" />
              Categoría
            </label>
            <select
              value={projectForm.category}
              onChange={(e) => setProjectForm({...projectForm, category: e.target.value})}
              className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-all"
              required
              disabled={isLoading}
            >
              <option value="">Seleccionar categoría</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Descripción
            </label>
            <textarea
              value={projectForm.description}
              onChange={(e) => setProjectForm({...projectForm, description: e.target.value})}
              rows="4"
              className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-all resize-none"
              placeholder="Describe los detalles del proyecto, materiales utilizados, conceptos de diseño..."
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              <Image size={16} className="inline mr-2" />
              Imágenes del Proyecto
            </label>
            <ImageUploadArea
              images={projectForm.images}
              onImageUpload={handleImageUpload}
              onRemoveImage={removeImage}
              formType="project"
            />
          </div>

          <div className="flex justify-end space-x-4 pt-6 border-t border-stone-200">
            <button
              type="button"
              onClick={() => setIsProjectModalOpen(false)}
              className="px-6 py-3 border border-stone-300 text-stone-700 rounded-sm hover:bg-stone-50 transition-colors"
              disabled={isLoading}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-stone-600 text-white rounded-sm hover:bg-stone-700 transition-colors flex items-center space-x-2"
              disabled={isLoading}
            >
              {isLoading && <Loader2 size={16} className="animate-spin" />}
              <span>{isLoading ? 'Guardando...' : 'Publicar Proyecto'}</span>
            </button>
          </div>
        </form>
      </Modal>

      {/* News Modal */}
      <Modal
        isOpen={isNewsModalOpen}
        onClose={() => !isLoading && setIsNewsModalOpen(false)}
        title="Nueva Noticia"
      >
        <form onSubmit={handleNewsSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              <Calendar size={16} className="inline mr-2" />
              Fecha de Publicación
            </label>
            <input
              type="date"
              value={newsForm.date}
              onChange={(e) => setNewsForm({...newsForm, date: e.target.value})}
              className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-all"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              <FileText size={16} className="inline mr-2" />
              Título de la Noticia
            </label>
            <input
              type="text"
              value={newsForm.title}
              onChange={(e) => setNewsForm({...newsForm, title: e.target.value})}
              className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-all"
              placeholder="Ej: Reconocimiento en Bienal de Arquitectura"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              <Tag size={16} className="inline mr-2" />
              Categoría
            </label>
            <select
              value={newsForm.category}
              onChange={(e) => setNewsForm({...newsForm, category: e.target.value})}
              className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-all"
              required
              disabled={isLoading}
            >
              <option value="">Seleccionar categoría</option>
              {newsCategories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Descripción
            </label>
            <textarea
              value={newsForm.description}
              onChange={(e) => setNewsForm({...newsForm, description: e.target.value})}
              rows="4"
              className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-all resize-none"
              placeholder="Comparte los detalles de la noticia, logros alcanzados, eventos importantes..."
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              <Image size={16} className="inline mr-2" />
              Imágenes de la Noticia
            </label>
            <ImageUploadArea
              images={newsForm.images}
              onImageUpload={handleImageUpload}
              onRemoveImage={removeImage}
              formType="news"
            />
          </div>

          <div className="flex justify-end space-x-4 pt-6 border-t border-stone-200">
            <button
              type="button"
              onClick={() => setIsNewsModalOpen(false)}
              className="px-6 py-3 border border-stone-300 text-stone-700 rounded-sm hover:bg-stone-50 transition-colors"
              disabled={isLoading}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-stone-600 text-white rounded-sm hover:bg-stone-700 transition-colors flex items-center space-x-2"
              disabled={isLoading}
            >
              {isLoading && <Loader2 size={16} className="animate-spin" />}
              <span>{isLoading ? 'Guardando...' : 'Publicar Noticia'}</span>
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default AgregarDatos;