import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
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
      const downloadURL = await getDownloadURL(snapshot.ref);
      
      return {
        url: downloadURL,
        name: imageData.file.name,
        size: imageData.file.size,
        type: imageData.file.type
      };
    } catch (error) {
      console.error(`Error subiendo imagen ${index}:`, error);
      throw error;
    }
  });

  // Esperar a que todas las imágenes se suban
  return await Promise.all(uploadPromises);
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
      area: projectData.area, // <-- Agregado aquí
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
      area: newsData.area, // <-- Agregado aquí
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