/*var boton_login;
var nombre,apellido,correo,contraseña,exprecion;//Registro.
var correo_login, password_login;
var form_loggin;
var form_registro;

form_loggin = document.getElementById('formulario_2');
form_loggin.addEventListener('submit', (event) => {
    event.preventDefault();
    checkForm();
});

form_registro=document.getElementById("formulario");
form_registro.addEventListener('submit',(event)=>{
    event.preventDefault();
    validar_registro();
});



form_loggin = document.getElementById('formulario_2');
form_loggin.addEventListener('submit', (event) => {
    event.preventDefault();
    checkForm();
});


function  checkForm () {
    var correo_login = document.getElementById("correo_2").value;
    var password_login = document.getElementById("contraseña_2").value;
    

    if(!correo_login || !password_login){
        alert('Ingresa los valores');

    }
    else{

        //console.log(`${correo} ${contraseña}`);
        

        if(correo === correo_login && contraseña === password_login){
            //alert('Login Ok');
            console.log('Redirect');
            window.location.href = "index.html";
            
            //window.location.replace('http://www.index.html');
        }
        else{
            console.log('Datos no ok');
            alert('Datos incorrectos');
        }
    }
    
            
} //checkForm


function validar_registro(){
  
   nombre=document.getElementById("nombre").value;
   apellido=document.getElementById("apellido").value;
   correo=document.getElementById("correo").value;
   contraseña=document.getElementById("contraseña").value;

    exprecion=/\w+@\w+\.+\w/;
    if(nombre==="" || apellido==="" || correo==="" || contraseña===""){
        alert("porfavor completa todos los campos");
        return false;

    }
    else if(!exprecion.test(correo)){
        alert("el correo no es valido");
        return false;

    }
    else{
        alert("Registro correcto!");
    }


/* else if(isNaN(ficha)){
   alert("la ficha es de solo numeros");       para cuando le agrege la ficha o no por ficha sino por programa de formaicon
   return false;
}

}*/