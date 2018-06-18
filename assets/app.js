
//dado un arreglo con nombres en mayusculas, transformar en minusculas y guardaslas en nuevo arreglo

const names = ["MARCIA", "NADIA", "FABIAN", "JUAN", "ALE"];
//lo pasa a minuscla
const namesLowerCase = (names) => {
  // si tiene un solo parametro puede ir sin ()
  let newArr = [];
  // recoro mi arreglo
  for (let i = 0; i < names.length; i++) {
    newArr.push(names[i].toLowerCase());
  }
  console.log(newArr); //para que me tire el resultado en consola
  return newArr;

};


//MAP  devuelve un arreglo nuevo con lo que yo le pido que agregue sin tocar el arreglo original, no necesita un indice, ya que si o si recorre todos los elementos y sabe que tiene que recorrer la longitud de manera automatica

const names = ["MARCIA", "NADIA", "FABIAN", "JUAN", "ALE"];

const namesLowerCase = pepito => {
  const result = pepito.map((element) /*hacereferenciaalvalorunodelelementoporloquedebeiralgodescriptivo*/ => {
    return element.toLowerCase();
  })
}
namesLowerCase(names) //para verlo


//EJERCICIO
/*Dado dos string (firstWord y secondWord) escribir una función para determinar si secondWord es anagrama de firstWord.
Si es anagrama devolver true
Ejemplo:
firstWord = "ANAGRAMA"
secondWord = "NMGRAAAA"
**devolvera true**

firstWord = "car"
secondWord = "cat"
**devolvera false*
*/
// se debe hacer un for o forEach
//.SORT es un metodo solo para arreglos y los ordena alfabeticamente
//.SPLIT convierte una string en un ARREGLO para poder usar un .sort


//VERSION LARGA
const firstWord = "anagrama"; 
const secondWord = "nmgraaaa";
const anagrama = (firstWord, secondWord) => {
  const firstStr = firstWord.split("").sort(); /*lo convierto en arreglo con split y luego lo ordeno alfabeticamente con sort*/
  const secondStr = secondWord.split("").sort();
  /*declaro una variable para que siga recorriendo el if que haga*/
  let result;
  for (let i = 0; i < firstStr.length; i++) {
    for (let j = 0; j < secondStr.length; j++) {
      if (firstStr[i] === secondStr[j]) {
        result = true;
      } else{
        result = false;
      }
    }
  }
  return result;
}
anagrama (firstWord , secondWord);


//VERSION CORTA
if (firstWord.toLocaleLowerCase().split('').sort() === 
secondWord.toLocaleLowerCase().split('').sort()) {
  result = true;
}

else {
  result = false;
}




// OBJETOS (keys=propiedad)


//object.keys(nombreObjeto) me devuelve las propiedades en un ARREGLO
//Object.values(nombreObjeto) me devuelve los valores de esas propiedades en un ARREGLO
//Object.entries(nombreObjeto) me devuelve un ARREGLO con propiedad:valor , propiedad:valor
