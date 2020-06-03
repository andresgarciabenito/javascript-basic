<!-- Ejercicio 1 -->
    console.log("Hola mundo");

<!-- Ejercicio 2 -->
    console.log("Andres Garcia Benito")

<!-- Ejercicio 3 -->
 var name= "Andres"
 var surname= "Garcia Benito"
 document.write(name+" "+surname+"<br>");

 <!-- Ejercicio 4 -->
var num1= prompt("Inserta un número:");
var num2= prompt("Inserta otro número:");
var result= parseInt(num1)+parseInt(num2);
console.log("El resultado de la suma de "+num1+ " + "+num2+" es " + result);

<!-- Ejercicio 5  -->
var nota_examen=prompt("Ingresa la nota obtenida para saber si has aprobado:");
if (nota_examen < 7){
  console.log("Has desaprobado el examen, con una nota de "+nota_examen+".");
}else if (nota_examen >10){
  console.log("La nota ingresada supera el valor máximo (10), revisa el siguiente valor: "+nota_examen+".");
}else
  console.log("Felicitaciones. Has aprobado el examen con una nota de "+nota_examen+".");

 <!-- Ejercicio 6 -->
// Reemplaza la palabra azul por verde en este texto "Tengo un coche de color azul". Después intenta cambiar las letras o por u.
var phrase = "Tengo un coche de color azul";
var newphrase= phrase.replace("azul", "verde");
document.write(newphrase+"<br>");
var newphrase2= newphrase.replace(/o/g,"u");
document.write(newphrase2+"<br><br>");


<!-- Ejercicio 7 -->
//Dada la siguiente lista de objetos "mesa","silla","ordenador","libreta", haz un bucle que muestre en pantalla cada objeto y la posición en el listado.

var elements=["mesa","silla","ordenador","libreta"];
var i=0;
for (i=0; i<elements.length;i++){
 console.log("El objeto "+elements[i]+" está en la posición "+[i]+".");
}

<!-- Ejercicio 8 -->
//Crea una función calculadora que tenga como entrada los siguientes parámetros: operador, valor1 y valor2. Realizar sumas, restas y multiplicaciones. Resultado mostrado en pantalla.
function calculadora(operador,valor1,valor2){
var operador=document.getElementById('op').value;
var valor1=parseInt(document.getElementById('v1').value);
var valor2=parseInt(document.getElementById('v2').value);
var resultado=0;

  if (operador=="sumar"){
    resultado=valor1+valor2;
    document.getElementById("display").value=resultado;
  }else if (operador=="restar"){
    resultado=valor1-valor2;
    document.getElementById("display").value=resultado;
  }else if (operador=="multiplicar"){
    resultado=valor1*valor2;
    document.getElementById("display").value=resultado;
  }else
   document.getElementById("display").value="error";
}
