var contador = 0;

function contar(){
  var caracteres = document.getElementById("cajaDeTexto").value;
  var decremento = 140 - caracteres.length;
  document.getElementById("contador").innerHTML = decremento + "/" + 140;
}

function imprimir(){
  var caracteres = document.getElementById("cajaDeTexto").value;
  console.log(caracteres);
  var autor = document.getElementById("autor").value;
  console.log(autor);
  document.getElementById("mostrarTweets").innerHTML = caracteres + "<br>" + "Por " + autor;
}

function contadorDeClicks (){

  contador = addEventListener(onclick);
  document.getElementById("contadorDeClicks").innerHTML = contador++;
}
