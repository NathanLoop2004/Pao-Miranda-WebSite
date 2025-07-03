import { collection, addDoc, serverTimestamp, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from './config';

// Función para subir múltiples imágenes a Firebase Storage
export const uploadImages = async (images, folder = 'images') => {
  const uploadPromises = images.map(async (imageData, index) => {
    try {
      // Crear referencia única para cada imagen
      const timestamp = Date.now();
      const fileName = `${folder}/${timestamp}_${index}_${imageData.file.name}`;
      const imageRef = ref(storage, fileName);
      
      // Subir imagen
      const snapshot = await uploadBytes(imageRef, imageData.file);
      
      // Obtener URL de descarga
      const downloadURL = await getDownloadURL(snapshot.ref);
      
      return {
        url: downloadURL,
        name: imageData.file.name,
        size: imageData.file.size,
        type: imageData.file.type,
        path: fileName // Guardamos el path para poder eliminar después
      };
    } catch (error) {
      console.error(`Error subiendo imagen ${index}:`, error);
      throw error;
    }
  });

  // Esperar a que todas las imágenes se suban
  return await Promise.all(uploadPromises);
};

// Función para eliminar imágenes de Firebase Storage
export const deleteImages = async (images) => {
  if (!images || images.length === 0) return;

  const deletePromises = images.map(async (image) => {
    try {
      // Si la imagen tiene un path, usarlo; si no, extraerlo de la URL
      let imagePath = image.path;
      
      if (!imagePath && image.url) {
        // Extraer el path de la URL de Firebase Storage
        const url = new URL(image.url);
        const pathMatch = url.pathname.match(/\/o\/(.+?)\?/);
        if (pathMatch) {
          imagePath = decodeURIComponent(pathMatch[1]);
        }
      }

      if (imagePath) {
        const imageRef = ref(storage, imagePath);
        await deleteObject(imageRef);
        console.log(`Imagen eliminada: ${imagePath}`);
      }
    } catch (error) {
      console.error('Error eliminando imagen:', error);
      // No lanzamos el error para que no interrumpa la eliminación de otras imágenes
    }
  });

  await Promise.all(deletePromises);
};

// Función para guardar proyecto en Firestore
export const saveProject = async (projectData) => {
  try {
    // Subir imágenes primero
    const imageUrls = projectData.images.length > 0 
      ? await uploadImages(projectData.images, 'projects')
      : [];

    // Preparar datos del proyecto
    const projectToSave = {
      title: projectData.title,
      description: projectData.description,
      date: projectData.date,
      category: projectData.category,
      area: projectData.area,
      images: imageUrls,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    // Guardar en Firestore
    const docRef = await addDoc(collection(db, 'projects'), projectToSave);
    
    return {
      success: true,
      id: docRef.id,
      data: projectToSave
    };
  } catch (error) {
    console.error('Error guardando proyecto:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Función para guardar noticia en Firestore
export const saveNews = async (newsData) => {
  try {
    // Subir imágenes primero
    const imageUrls = newsData.images.length > 0 
      ? await uploadImages(newsData.images, 'news')
      : [];

    // Preparar datos de la noticia
    const newsToSave = {
      title: newsData.title,
      description: newsData.description,
      date: newsData.date,
      category: newsData.category,
      area: newsData.area,
      images: imageUrls,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    // Guardar en Firestore
    const docRef = await addDoc(collection(db, 'news'), newsToSave);
    
    return {
      success: true,
      id: docRef.id,
      data: newsToSave
    };
  } catch (error) {
    console.error('Error guardando noticia:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Función para obtener todos los proyectos
export const getProjects = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'projects'));
    const projects = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    return {
      success: true,
      data: projects
    };
  } catch (error) {
    console.error('Error obteniendo proyectos:', error);
    return {
      success: false,
      error: error.message,
      data: []
    };
  }
};

// Función para obtener todas las noticias
export const getNews = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'news'));
    const news = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    return {
      success: true,
      data: news
    };
  } catch (error) {
    console.error('Error obteniendo noticias:', error);
    return {
      success: false,
      error: error.message,
      data: []
    };
  }
};

// Función para eliminar proyecto
export const deleteProject = async (projectId, projectData) => {
  try {
    // Primero eliminar las imágenes del Storage
    if (projectData.images && projectData.images.length > 0) {
      await deleteImages(projectData.images);
    }

    // Luego eliminar el documento de Firestore
    await deleteDoc(doc(db, 'projects', projectId));
    
    return {
      success: true,
      message: 'Proyecto eliminado exitosamente'
    };
  } catch (error) {
    console.error('Error eliminando proyecto:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Función para eliminar noticia
export const deleteNews = async (newsId, newsData) => {
  try {
    // Primero eliminar las imágenes del Storage
    if (newsData.images && newsData.images.length > 0) {
      await deleteImages(newsData.images);
    }

    // Luego eliminar el documento de Firestore
    await deleteDoc(doc(db, 'news', newsId));
    
    return {
      success: true,
      message: 'Noticia eliminada exitosamente'
    };
  } catch (error) {
    console.error('Error eliminando noticia:', error);
    return {
      success: false,
      error: error.message
    };
  }
};