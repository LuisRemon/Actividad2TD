<?php
include("conexion.php");
if(isset($_GET['id'])) {
    $id = $_GET['id'];
    $query = "DELETE FROM cliente WHERE ID = $id";
    $result = mysqli_query($conn, $query);
    if(!$result) { 
        die("Query Failed");
    }

    header("location:../index.php");
}
?>