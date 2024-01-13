<?php

if (session_status() === PHP_SESSION_ACTIVE) {
} else {
    session_start();
}

$servername = "grupo03tad.mysql.database.azure.com";
$username = "azuremysql";
$password = "Grupo3tad";
$dbname = "grupo3tad";

// Crea la conexión con SSL deshabilitado (NO recomendado para producción)
$conn = mysqli_init();
mysqli_ssl_set($conn,NULL,NULL, "DigiCertGlobalRootCA.crt.pem", NULL, NULL);
mysqli_real_connect($conn, $servername, $username, $password, $dbname, 3306, MYSQLI_CLIENT_SSL);

if (mysqli_connect_errno()) {
    die('Failed to connect to MySQL: '.mysqli_connect_error());
}

?>