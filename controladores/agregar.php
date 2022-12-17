<?php
if(isset($_POST['name']) && isset($_POST['description']) ){
    include ("conexion.php");

    $nombre=$_POST['name'];
    $descripcion=$_POST['description'];

    $sql="INSERT INTO task(name,description)VALUES('$nombre','$descripcion')";
    $resultado=mysqli_query($conexion,$sql);
    if(!$resultado){
        die('no funciono la insert');
    }
    echo "insertado correctamente";

}

?>