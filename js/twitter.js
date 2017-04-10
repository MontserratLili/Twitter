var contador = 0;
var max = 140;
var a = [];

function contar(){
  var caracteres = document.getElementById("cajaDeTexto").value;
  var decremento = max - caracteres.length;
  document.getElementById("contador").innerHTML = decremento + "/" + max;
}

function imprimir(){
  var caracteres = document.getElementById("cajaDeTexto").value;
  console.log(caracteres);
  var autor = document.getElementById("autor").value;
  console.log(autor);
  var nuevaLista = document.createElement("ol");
  var nuevoNodo = document.createElement("li");

var b= document.createElement("li");
b.innerHTML = caracteres+"<br>" + "De " + autor;
document.getElementById("mostrarTweets").appendChild(b);
document.getElementById("cajaDeTexto").value = "";
document.getElementById("autor").value = "";
}

function reiniciar(){
  document.getElementById("contador").innerHTML = contador + "/" + max;
}

function contadorDeClicks(){
  a.push = document.getElementById("area").onclick;
  var b = a.length;
  console.log(a);
  console.log(b);
}

enviar.addEventListener("click", imprimir);
enviar.addEventListener("click", reiniciar);
cajaDeTexto.addEventListener("input", contar);
area.addEventListener("click", contadorDeClicks);
