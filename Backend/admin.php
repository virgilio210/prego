<?php
// Incluir el archivo de conexión
//include '../conectarBD.php';

/*

// codigo para la opcion de administrador
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validar y procesar los datos del formulario
    $productName = $_POST['product-name'];
    $productDescription = $_POST['product-description'];
    $productPrice = $_POST['product-price'];
    $productStock = $_POST['product-stock'];
    $productCategory = $_POST['product-category'];
    $productImage = $_FILES['product-image'];

    // Validaciones del lado del servidor
    if (empty($productName) || empty($productDescription) || empty($productPrice) || empty($productStock) || empty($productCategory)) {
        echo "Todos los campos son obligatorios.";
        exit;
    }

   // Manejo de la imagen subida
   $targetDir = "imagenes/";
   $targetFile = $targetDir . basename($productImage["name"]);
   $uploadOk = 1;
   $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

   // Verificar si el archivo es una imagen real
   $check = getimagesize($productImage["tmp_name"]);
   if ($check === false) {
       echo "El archivo seleccionado no es una imagen.";
       exit;
   }

   // Verificar si el archivo ya existe
   if (file_exists($targetFile)) {
       echo "El archivo ya existe.";
       exit;
   }

   // Verificar tamaño de archivo (opcional)
   if ($productImage["size"] > 500000) {
       echo "El archivo es demasiado grande.";
       exit;
   }

   // Mover archivo al directorio de imágenes
   if (move_uploaded_file($productImage["tmp_name"], $targetFile)) {
       // Guardar la URL de la imagen en la base de datos
       $imageUrl = $targetFile; // Aquí podrías almacenar la ruta relativa o absoluta según necesites en tu base de datos

       // Preparar y ejecutar la consulta SQL para insertar los datos en la base de datos
       $stmt = $conn->prepare("INSERT INTO Producto(nombre, descripcion, precio, categoria, cantidad, ruta_imagen) VALUES (?, ?, ?, ?, ?, ?)");
       $stmt->bind_param("ssdsis", $productName, $productDescription, $productPrice,$productCategory, $productStock, $imageUrl);

       if ($stmt->execute()) {
           echo "Producto agregado exitosamente.";
       } else {
           echo "Error al agregar el producto: " . $stmt->error;
       }

       $stmt->close();
   } else {
       echo "Error al subir la imagen.";
   }

}

// Cerrar conexión
$conn->close();
*/

// Incluir el archivo de conexión
include '../../conectarBD.php';

// código para la opción de administrador
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validar y procesar los datos del formulario
    $productName = $_POST['product-name'];
    $productDescription = $_POST['product-description'];
    $productPrice = $_POST['product-price'];
    $productStock = $_POST['product-stock'];
    $productCategory = $_POST['product-category'];
    $productImage = $_FILES['product-image'];

    // Validaciones del lado del servidor
    if (empty($productName) || empty($productDescription) || empty($productPrice) || empty($productStock) || empty($productCategory)) {
        echo "Todos los campos son obligatorios.";
        exit;
    }

    // Manejo de la imagen subida
    $targetDir = "imagenes/";
    $targetFile = $targetDir . basename($productImage["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

    // Verificar si el archivo es una imagen real
    $check = getimagesize($productImage["tmp_name"]);
    if ($check === false) {
        echo "El archivo seleccionado no es una imagen.";
        exit;
    }

    // Verificar si el archivo ya existe
    if (file_exists($targetFile)) {
        echo "El archivo ya existe.";
        exit;
    }

    // Verificar tamaño de archivo (opcional)
    if ($productImage["size"] > 500000) {
        echo "El archivo es demasiado grande.";
        exit;
    }

    // Mover archivo al directorio de imágenes
    if (move_uploaded_file($productImage["tmp_name"], $targetFile)) {
        // Guardar la URL de la imagen en la base de datos
        $imageUrl = $targetFile; // Aquí podrías almacenar la ruta relativa o absoluta según necesites en tu base de datos

        // Preparar y ejecutar la consulta SQL para insertar los datos en la base de datos
        $stmt = $conn->prepare("INSERT INTO Producto(nombre, descripcion, precio, categoria, cantidad, ruta_imagen) VALUES (?, ?, ?, ?, ?, ?)");
        // Verificar si la preparación de la consulta fue exitosa
        if ($stmt === false) {
            echo "Error en la preparación de la consulta (" . $conn->error . ")";
            exit;
        }

        $stmt->bind_param("ssdsis", $productName, $productDescription, $productPrice, $productCategory, $productStock, $imageUrl);

        if ($stmt->execute()) {
            echo "Producto agregado exitosamente.";
        } else {
            echo "Error al agregar el producto: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "Error al subir la imagen.";
    }
}

// Cerrar conexión
$conn->close();
