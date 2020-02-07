<?php

// DATOS DE CONEXION A LA BASE DE DATOS
function conexion() {
  $conexion = mysqli_connect("localhost", "camilo_castel", "Camilo#2020Caltel", "blanqueria");
  
  return $conexion;
}

?>