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
     $token=$_POST['token'];
     $email=$_POST['email'];
     $password=$_POST['password'];
     echo($token.$password.$email);
     $consulta=mysqli_query($conexion,"UPDATE aprendiz set token='',pass='$password' where correo='$email' ");
     //echo('aqui');
     $resultado=mysqli_query($conexion,$consulta);
     echo($consulta);
     if($consulta==1){
        echo '<script> 
                alert ("cambio correcto") ;
        
            </script>';
        echo ('hola a todos');
        header("Location: http://localhost/senanswer2/registro_proy.html");
     }
    
     //header("Location: http://www.google.com"); window.history.go(-1);
     mysqli_close($conexion);


?>