
// Importar la instancia de Firestore desde firebase-conf.js
import { db } from './firebase-conf.js';


// Función para registrar usuarios en Firestore
async function registerUser(userDetails) {
  try {
    const docRef = await db.collection('usuarios').add(userDetails);
    console.log("Usuario registrado con ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error al registrar usuario: ", error);
    throw error;
  }
}

// Manejo del evento de envío del formulario
document.addEventListener('DOMContentLoaded', () => {
  const registrationForm = document.querySelector('form');

  registrationForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userDetails = {
      cedula: document.getElementById('cedula').value,
      nombre: document.getElementById('nombre').value,
      apellido: document.getElementById('apellido').value,
      celular: document.getElementById('celular').value,
      ciudad: document.getElementById('ciudad').value,
      direccion: document.getElementById('direccion').value,
      correo: document.getElementById('correo').value,
      contrasena: document.getElementById('contrasena').value 
    };

    try {
      await registerUser(userDetails);
      alert('Registro exitoso');
      // Puedes agregar aquí redirección u otras acciones después del registro exitoso
    } catch (error) {
      console.error('Error al registrar: ', error);
      alert('Hubo un error al registrar. Por favor, inténtalo nuevamente.');
    }
  });
});


  