<?php

    include('conexion.php');

    $sql="SELECT * FROM task";
    $result=mysqli_query($conexion,$sql);

    if(!$result){
        die('no se inserto');
    }

    $json=array();
    while($row = mysqli_fetch_array($result)){
        $json[] = array(
            'name'=> $row['name'],
            'description'=> $row['description'],
            'id'=> $row['id']
        );
    }
    $jsonString=json_encode($json);
    echo($jsonString);
?>