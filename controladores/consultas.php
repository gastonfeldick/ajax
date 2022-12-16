<?php
    include('conexion.php');

    $search=$_POST['search'];
    if(!empty($search)){
        $sql="SELECT *FROM task WHERE name LIKE'$search%'";
        $resultado=mysqli_query($conexion,$sql);
        if(!$resultado){
            die("no funciono");
        }

        $json=array();
        while($row=mysqli_fetch_array($resultado)){
            $json[]=array(
                'name'=> $row['name'],
                'description'=>$row['description'],
                'id'=>$row['id']
            );
        }
        $jsonstring=json_encode($json);
        echo $jsonstring;

    }

?>