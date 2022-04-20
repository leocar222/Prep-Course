// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
/*objeto({
    D: 1,
    B: 2,
    C: 3
  }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
//Escribe tu código aquí
var nuevoArray=[];

for(let clave in objeto){
  nuevoArray.push([clave,objeto[clave]]) ;
}
return nuevoArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto={}
  
  var variable='';
  for(i=0;i<string.length;i++){
    var contador=0;
      variable=string.charAt(i)
    for(j=0;j<string.length;j++){
      if (variable===string.charAt(j)){
        contador=contador+1;
      }
    }
    objeto[variable]=contador;
  }
    return objeto}

    function capToFront(s) {
      //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
      //al principio de la palabra.
      //Ejemplo: soyHENRY -> HENRYsoy
      //Escribe tu código aquí
      var nuevoString=''
      var stringmin=''  
      for(i=0;i<s.length;i++){
        if(s[i]===s[i].toUpperCase()){
          nuevoString=nuevoString+s[i];
        }
        else   stringmin=stringmin+s[i];
      }
      return nuevoString+stringmin;
    }


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí


var apoyoArray=str.split(' ');
for(i=0;i<apoyoArray.length;i++){
var cadaString=apoyoArray[i];
  var nuevoString='';
    for(j=cadaString.length-1;j>=0;j--){
      nuevoString=nuevoString+cadaString[j];
    }
    apoyoArray[i]=nuevoString;
}
var stringFinal=''
for(i=0;i<apoyoArray.length;i++){
stringFinal=stringFinal+apoyoArray[i]+" ";
}
return stringFinal.trim();
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numero.toString()
  var nuevoNum=''
  for(i=numero.toString().length-1;i>=0;i--){
    nuevoNum=nuevoNum+numero.toString()[i];
  }
  if(numero.toString()===nuevoNum){
    return 'Es capicua';
  }
  else return 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
nuevaCadena='';  
  for(i=0;i<cadena.length;i++){
    if(cadena[i]==='a'||cadena[i]==='b'||cadena[i]==='c'){
      
    }
 else nuevaCadena=nuevaCadena+cadena[i];
  }
  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  nuevoArr=[];
  var aux='';
  for (i=0;i<arr.length;i++){
    if(i===arr.length-1){
      break;
    }
   if (arr[i].length>arr[i+1].length){
     aux=arr[i];
    arr[i]=arr[i+1];
     arr[i+1]=aux;
    i=0;
   }
   
      }
      return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arregloUnion=[];
  for (i=0;i<arreglo1.length;i++){
    for(j=0;j<arreglo2.length;j++){
      if(arreglo2[j]===arreglo1[i]){
        arregloUnion.push(arreglo2[j]);
      }
    }
  }
  return arregloUnion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

