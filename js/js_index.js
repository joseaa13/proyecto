var form_pregunta;
var questionprint = '';
var questions=[];                                        //objecto  para usar 
var objectanswer=[];                                  //objeto para las answer sin uso
form_pregunta = document.getElementById('preguntaForm');
form_pregunta.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('En el submit');

    colocarPregunta();
});
function guardarrespuesta(iterador){            //
    var texto="texto_"+iterador;
    var cap_pregunta=document.getElementById(texto).value;
    //alert("hola"+cap_pregunta);
    //objectanswer[iterador]=cap_pregunta;
    questions[iterador].respuesta = cap_pregunta;

}

function mostrarinput( iterador){                    //mostar el textarea y el otro buton
    //alert("coje la funcion"+iterador);
    var texto="texto_"+iterador;
    var newbutton="enviar_"+iterador;
    document.getElementById(newbutton).style.display='inline';
    document.getElementById(texto).style.display='block';
    
   
    /* var click=document.getElementById(iterador);
    click.insertAdjacentHTML('afterend','<button  class="b_enviar" name="'+iterador+'" type="button" onclick="guardarinput()">ENVIAR!</button>');
    //var newbutton=document.createElement("button");
    //var newname=document.getElementById(iterador);
    //document.body.insertafter(newbutton,newname);
    //texto.innerHTML=newbutton;*/
}
function entrarforo(){
    var captureboolean=confirm("deseas entrar al foro");
    if(captureboolean==true){
        alert("recuerda que \nnombre de usuario =usuario \npassword=usuario");
        window.location="http://localhost/foro/ucp.php?mode=login";
    }
}
function colocarPregunta() {
    //Obtengo la pregunta
    //alert("hola q mas"); 
    var pregunta = document.getElementById("pregunta").value;
    var element = {pregunta:pregunta, respuesta:''};
    
    //console.log(preguntas);
    questions.unshift(element);
    //console.log(questions);
    //var pregunta_newindice=preguntaarray.unshift(pregunta);
    for(var i=0;i<questions.length;i++){
        
        var mostraranswer = questions[i].respuesta;
        

        questionprint += '<hr>'+questions[i].pregunta + '\n <button id="'+i+'" style="font-size:xx-small;border-radius:5px; border:none; "   type="button" onclick="mostrarinput('+i+');">RESPONDER!</button> <button class="b_enviar" id="enviar_'+i+'" type="button" style="display:inline;display:none;" onclick="guardarrespuesta('+i+')">ENVIAR!</button> <br>'+
        '<textarea  class="textarea" style="display:none; " rows="3" cols="50" id="texto_'+i+'">'+mostraranswer+'</textarea>';
            
    }
    //console.log(questionprint);
    document.getElementById("contenido3").innerHTML = questionprint;  //mando a la caja 
    questionprint="";
    
    
}