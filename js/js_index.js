
var openforum;
var element={};
var form_pregunta;
var questionprint = '';
var questions=[];                                        //objecto  para usar 
//var objectanswer=[];                                  //objeto para las answer sin uso
//SEARCH 
var search=document.querySelector("#formulario");
search.addEventListener("click",(e)=>{
console.log("foco");

window.location.href="C:/wamp/www/senanswer2/index_search.html";

});


form_pregunta = document.getElementById('preguntaForm');
form_pregunta.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('En el submit');
    
    colocarPregunta();
});

openforum=document.querySelector("#openforum");
openforum.addEventListener("click",(e)=>{

    var captureboolean=confirm("deseas entrar al foro");
    if(captureboolean==true){
        alert("recuerda que \nnombre de usuario =usuario \npassword=usuario");
        window.open("http://localhost/foro/ucp.php?mode=login");
    }
});

function colocarPregunta() {
    //Obtengo la pregunta
    //alert("hola q mas"); 
    var pregunta = document.getElementById("pregunta").value;
    var fecha=new Date().toLocaleDateString();
    element = {question:pregunta, answer:'', date:fecha ,image:''};
   probar(pregunta,null);
    if(pregunta.length<=10 || isNaN(pregunta)==false){
        return false;
    }

    //console.log(preguntas);
    questions.unshift(element);
    //console.log(questions);
    //var pregunta_newindice=preguntaarray.unshift(pregunta);
    for(var i=0;i<questions.length;i++){
        
        var mostraranswer = questions[i].answer;
        

        questionprint += '<hr> '+questions[i].question + '\n <button id="'+i+'" style="font-size:xx-small;border-radius:5px; border:none; "   type="button" onclick="mostrarinput('+i+');">RESPONDER!'
        +' </button> <button class="b_enviar" id="enviar_'+i+'" type="button" style="display:inline;display:none;" onclick="guardarrespuesta('+i+')">ENVIAR!</button> <input type="file" class="btn btn-default" name="file" id="file_'+i+'"> <br>'+
        '<textarea  class="textarea" style="display:none; " rows="3" cols="50" id="texto_'+i+'">'+mostraranswer+'</textarea>'; 
            
        
    }
    console.log(pregunta);
    console.log(element.question);
    //console.log(questionprint);
    document.getElementById("contenido3").innerHTML = questionprint;  //mando a la caja 
    questionprint="";
    
    
}

function mostrarinput( iterador){                    //mostar el textarea y el otro buton
    //alert("coje la funcion"+iterador);
    var texto="texto_"+iterador;
    var newbutton="enviar_"+iterador;
    document.getElementById(newbutton).style.display='inline';
    document.getElementById(texto).style.display='block';
    
    
    var file=document.querySelector(".file");
    file.style.display='inline';

    
    
   
    /* var click=document.getElementById(iterador);
    click.insertAdjacentHTML('afterend','<button  class="b_enviar" name="'+iterador+'" type="button" onclick="guardarinput()">ENVIAR!</button>');
    //var newbutton=document.createElement("button");
    //var newname=document.getElementById(iterador);
    //document.body.insertafter(newbutton,newname);
    //texto.innerHTML=newbutton;*/
}


function guardarrespuesta(iterador){            //
    var texto="texto_"+iterador;
    
    var cap_pregunta=document.getElementById(texto).value;
    var archivo="file_"+iterador;
    var file=document.querySelector("#"+archivo).files[0];
    var formdata=new FormData();
    //var url2 =URL.createObjectURL(file);
    //if(!url2) element.image=null;
    //else{element.image=url2;}
    if(file) {
        var url2 =URL.createObjectURL(file);
    }else{
        url2=null;
    }
   // formdata.append("file".file,file.name);

    //alert("hola"+cap_pregunta);
    //objectanswer[iterador]=cap_pregunta;
    questions[iterador].answer = cap_pregunta;
    element.image=url2;
    element.answer=cap_pregunta;
    
    var url='http://localhost:3700/jose/save-question';
    fetch(url,{
        method:'POST',
        body:JSON.stringify(element),
        headers:{'content-type': 'application/json'
        }
    })
    .then(response=>response.json())
    .catch(err =>{console.log(err)})
    .then(response =>{ 
        console.log('success:',response); 
        console.log('success:',response.question._id);
       
    });
    //console.log('success:',response.question._id);
    console.log(file,"aqui",url2);
    console.log(element);
}

function probar(){

    //console.log(pregunta+respuesta);
}


