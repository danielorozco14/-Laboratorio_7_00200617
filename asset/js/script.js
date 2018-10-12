
//******** GET ELEMENTS BY ID */
var container=document.getElementById("c1");
console.log(container);

container.innerText=("¡Hola Mundo!");

container.style.backgroundColor=("#000000");
container.style.color="#1cb723";
container.style.width="200px";
container.style.height="200px";

container.innerHTML="<input type=”text” placeholder=’escriba su texto’>";

//******** GET ELEMENTS BY CLASS NAME */
var containers=document.getElementsByClassName("c2");
console.log(containers);

for(let i of containers){
    i.setAttribute("style","background-color:#009999");
    i.innerHTML=" <input type='text' placeholder='Escriba su texto'>";
}

//******* EVENTOS */

var boton=document.getElementById("btn-click");
boton.onclick = function(evt){ 
    alert("Hola mundo"); 
}

var btnCopy=document.getElementById("btnCopy");

btnCopy.onclick = function(evt) 
{ 
let msj = document.getElementById('textMsj').value;
document.getElementById('showMsj').innerText = msj;
}