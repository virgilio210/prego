// Función para manejar el envío de formularios mediante fetch
function handleFormSubmit(formId, successMessage) {
    var form = document.getElementById(formId);
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío estándar del formulario

        var formData = new FormData(this); // Obtiene los datos del formulario

        fetch('../prego/logica/admin.php', {
            method: 'POST',
            body: formData
        }).then(response => response.text())
          .then(data => {
              displayMessage(successMessage, 'success'); // Muestra mensaje de éxito
              clearForm(formId); // Limpia el formulario
          })
          .catch(error => {
              console.error('Error:', error); // Maneja errores de la solicitud
              displayMessage('Error al procesar el formulario.', 'error'); // Muestra mensaje de error
          });
    });
}

// Función para limpiar un formulario especificado
function clearForm(formId) {
    var form = document.getElementById(formId);
    form.reset(); // Resetea el formulario

    var previews = form.querySelectorAll('img');
    previews.forEach(function(preview) {
        preview.style.display = 'none'; // Oculta vistas previas de imágenes
    });
}

// Función para mostrar mensajes en la interfaz de usuario
function displayMessage(message, type) {
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = message; // Establece contenido del mensaje
    messageDiv.className = 'message ' + type; // Establece clase CSS del mensaje
    messageDiv.style.display = 'block'; // Muestra el mensaje

    // Oculta el mensaje después de 15 segundos
    setTimeout(function() {
        messageDiv.style.display = 'none';
    }, 15000);
}

// Llama a la función para manejar el formulario 'add-product-form'
handleFormSubmit('add-product-form', 'Producto agregado exitosamente.');

// Llama a la función para manejar el formulario 'edit-product-form'
handleFormSubmit('edit-product-form', 'Producto editado exitosamente.');
