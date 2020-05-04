<?php
    $bd_local="localhost";
    $bd_usuario="root";
    $bd_pass="";            //datos de conexion
    $bd_nombre="senanswer";
       //conexion a bd
    $conexion=mysqli_connect($bd_local,$bd_usuario,$bd_pass,$bd_nombre);
    mysqli_set_charset($conexion,"utf8");
    if(mysqli_connect_errno($conexion)){
        echo "no hay conexion  a la bd";
        exit();
    }/*else{
        echo "si hay conexion  a la bd";                  // probar la conexion   
    }*/

    $correo=$_POST["correo"];
    $pass=$_POST["pass"];

    $comprobar_email=mysqli_query($conexion,"SELECT * FROM aprendiz WHERE correo='$correo'");
    $comprobar_pass=mysqli_query($conexion , "SELECT * FROM aprendiz WHERE pass='$pass'");
    $print=mysqli_num_rows($comprobar_email);
    
    //if($comprobar_email==true && $comprobar_pass==true){
       if(mysqli_num_rows($comprobar_email) >0 && mysqli_num_rows($comprobar_pass) >0 ) {
          /* echo"entro if"; /*echo "<script> console.log('redirect');
                window.location.href='file:///C:/Users/Eider%20Arango/Desktop/proyecto/index_proye.html';</script>";
                exit;*/
               header('location:index_proye.html');
              /* echo "<script> location.href='conexion.php';
               </script>";*/

           
           // echo "<script> location.href='file:///C:/wamp/www/senanswer2/index_proye.html';</script>";
            
           // echo "sigue";
           // include('index_proye.html');
            exit;
                
    }else{
        echo "<script> alert ('datos incorretos');window.history.go(-1); 
            </script>";
            
    }
   
















?>