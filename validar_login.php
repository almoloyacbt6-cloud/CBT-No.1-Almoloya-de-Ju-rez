<?php
session_start(); // <--- PASO CLAVE: Esto inicia la memoria del servidor
include 'conexion.php';

$curp = $_POST['curp'];
$matricula = $_POST['matricula'];

$consulta = "SELECT * FROM alumnos WHERE curp = '$curp' AND matricula = '$matricula'";
$resultado = mysqli_query($conexion, $consulta);

if ($fila = mysqli_fetch_assoc($resultado)) {
    // Guardamos los datos en variables de SESIÓN
    $_SESSION['usuario_nombre'] = $fila['nombre'];
    $_SESSION['usuario_foto'] = $fila['foto'];
    $_SESSION['logueado'] = true;

    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false]);
}
?>