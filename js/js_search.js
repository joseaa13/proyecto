//para la busqueda
var openforum;
var array=[];
var div=document.querySelector("#contenido4");  
openforum=document.querySelector("#openforum");
openforum.addEventListener("click",(e)=>{
    
    var captureboolean=confirm("deseas entrar al foro");
    if(captureboolean==true){
        alert("recuerda que \nnombre de usuario =usuario \npassword=usuario");
        window.open("http://localhost/foro/ucp.php?mode=login");
    }
});


var search=document.querySelector("#formulario");
//console.log(search);
search.addEventListener("submit",(e)=>{
div.innerHTML=" ";   
alert("in search");
e.preventDefault();
console.log(e);
var text=e.target[0].value;
if(text.length<=3) return false;
//console.log(e.target[0].value);
console.log(text);
//getquestion(text)


var url='http://localhost:3700/jose/questions/';
    fetch(url,{
        method:"get",

    })
    .then(response=>response.json())
    .then(response=>{
        console.log("success",response);
        array=[response];
        probar(response,text);
    })
});

function probar (object,buscar){
 var template;
 for (var i=0;i<=object.questions.length;i++) {
            
         var boolean=object?.questions[i]?.question.includes(buscar);
          
     if(boolean==true){
        var newdiv=document.createElement("div");
        var newh=document.createElement("h3");
        var newp=document.createElement("p");
        var newspan=document.createElement("span");
        var newimage=document.createElement("img");
        /*var pregunta=object.questions[i].question;
        var respuesta=object.questions[i].answer;
        var fecha=object.questions[i].date;
        var image=object.questions[i].image;*/
        newh.innerHTML=object.questions[i].question;
        newp.innerHTML=object.questions[i].answer;
        newspan.innerHTML=object.questions[i].date;
        //var src=object.questions[i].image
        newdiv.setAttribute("class","divcontent");
        newh.setAttribute("id","quest_"+i+"");
        newh.setAttribute("onclick","response("+i+")");
        newp.setAttribute("id","ans_"+i+"");
        newp.setAttribute("style","display:none");
        //newimage.setAttribute("src",src)
        newp.append(newspan);
        newdiv.append(newh,newp);
        //newdiv.innerHTML="hola que mas";
        //alert("si");
        //template=`<div><hr> <h1 id="quest_${i}">${pregunta}</h1> <p>${respuesta}</p></div>`;
        //console.log(pregunta,respuesta,fecha,image);
        div.append(newdiv);
        //div.append(template);
        console.log(newdiv);
    }  
     
//console.log(object[0].questions[1].question.includes(buscar));
}
console.log(object);
console.log(buscar);

 
}

function response(iterar){
  var  showanswer="ans_"+iterar;
  console.log(showanswer);
  //document.querySelector("#ans_"+iterar+"").sty;
   //showanswer.style.display='inline';
  // document.getElementById(showanswer).style?.display='block';
  var probar= document.querySelector("#ans_"+iterar+"");
  probar.removeAttribute("style");
  
}