<?php
    include "conexion.php";
    if(isset($_POST['id'])){
        $id=$_POST['id'];
        $sql="DELETE FROM task WHERE id=$id";
        $resultado=mysqli_query($conexion,$sql);
        if(!$resultado){
            die('no se elimino');
        }
        echo"eliminado correctamente";
    }else{
        echo"no existe";
    }
?>