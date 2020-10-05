<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style_recuperacion2.css">
</head>
<body>

    <?php
        require 'conexionn.php';

        
        $prueba=$_GET['token'];
        //echo($prueba);
        $consulta=mysqli_query($conexion,"SELECT token from aprendiz where token='$prueba'");
        $row=$consulta->fetch_assoc();
        if($prueba===$row['token'] AND isset($prueba)){
            //echo($prueba);
    ?>

        <div class='div-form'>
            <h3>Introduce los siguientes datos</h3>
            <?php
                
            ?>
            
        <form action="http://localhost/senanswer2/update_pass.php" method='post'>
            <input type="text" name='token' id='' placeholder='token' class='input' autocomplete='off'>
            <input type="email" name='email' placeholder='email' id='' class='input'>
            <input type="password" name='password' placeholder='*****' id='' class='input'>
            <input type="submit" value='Recuperar!' id='button'>
        </form>
        </div>

   <?php //echo($_POST['email']);
   }else{
       echo('no existe un token verifica de nuevo');
       header("Location: http://localhost/senanswer2/registro_proy.html");
   }
   
   
?>
</body>
</html>