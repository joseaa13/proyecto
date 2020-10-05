<?php
    $bd_local="localhost";
    $bd_usuario="root";
    $bd_pass="";            //datos 
    $bd_nombre="senanswer";
    $conexion=mysqli_connect($bd_local,$bd_usuario,$bd_pass,$bd_nombre); 
    mysqli_set_charset($conexion,"utf8");             
    if(mysqli_connect_errno($conexion)){         
        echo "no hay conexion  a la bd";
        exit();
    }



?>