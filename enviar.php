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
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/Exception.php';
    require 'phpmailer/PHPMailer.php';
    require 'phpmailer/SMTP.php';
   
    define('numero',rand(100,150));
    $numero=numero;
    $email=$_POST['email'];
    //$consulta="SELECT correo FROM aprendiz WHERE correo='j.daviio@hotmail.com'";
    $result=mysqli_query($conexion,"SELECT correo FROM aprendiz where correo ='j.daviio@hotmail.com'") ;
    $consulta=mysqli_query($conexion,"UPDATE aprendiz SET token='$numero' where correo='$email' ");
    
    
    //const numero=rand();
    
    $mail = new PHPMailer(true);
    $enlace='http://localhost/senanswer2/recuperacion_password.php?token='.numero;
    $row=$result->fetch_assoc();
   /* while ($row = $result->fetch_assoc()) {
        echo $row['correo'];
    }*/
    /*echo ($row['correo']);
    echo('#'.$numero);
    echo (numero);
    echo($email);*/
    $template="apreciado usuario has solicitado el cambio de contraseña
              se te pedira el correo y una nueva contraseña ademas del 
              token ". numero . " ingresa al siguiente link \n".$enlace;
    if(isset($email)){
        try {
            //Server settings
            $mail->SMTPDebug = 0;                   //SMTP::DEBUG_SERVER  // Enable verbose debug output
            $mail->isSMTP();                                            // Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
            $mail->Username   = 'adsenanswer@gmail.com';                     // SMTP username
            $mail->Password   = 'adsi1835082';                               // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
        
            //Recipients
            $mail->setFrom('adsenanswer@gmail.com', 'senanswer');     //donde generara los correo y abajo quien recibe
            $mail->addAddress($email);            // Add a recipient
            /*$mail->addAddress('ellen@example.com');               // Name is optional
            $mail->addReplyTo('info@example.com', 'Information');
            $mail->addCC('cc@example.com');
            $mail->addBCC('bcc@example.com');*/
        
            // Attachments
            /*$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
            $mail->addAttachment('/tmp/image.jpg', 'new.jpg'); */      // Optional name eso para envio de imagenes y archivos
        
            // Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = 'asunto de recuperacion de contraseña';
            $mail->Body    = $template;
            /*$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';*/
        
            $mail->send();
            echo ('<p>Se ah enviado un token al siguiente correo!:</p><strong>'.$email.'</strong>');
        } catch (Exception $e) {
            echo "El mensaje no se ha enviado Error: {$mail->ErrorInfo}";
        }
    }
    

   
?>