<?php
$conexion = mysqli_connect("localhost", "root", "", "cbt_escolar");

if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}
?>