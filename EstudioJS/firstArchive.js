console.log("Hola mundo")
//Tipos de valores
numberFirst=27
numberSecond=3.1416
console.log(typeof numberFirst)
console.log(typeof numberSecond)
//Concatenacion de textos
textOne='Campus'
textSecond='Lands'
let textoConcat=textOne+textSecond
console.log(textoConcat)

 /* Metodos para strings  */

// Si la cadena incluye o no un string especificado

console.log(textOne.includes("Campus")) // True porque textOne contiene el string "Campus"

console.log(textOne.includes("x")) // False porque textOne no contiene el string "x"

// Si la cadena comienza con un string especificado

// startsWith verifica si la cadena comienza con el string ingresado si la el string ingresado va previo al resto del string la funcion nos arroja true

console.log(textoConcat.startsWith("Campus")) // Arroja true porque textConcat inicia con Campus

console.log(textoConcat.startsWith("Lands")) // Arroja false porque textConcat no comienza con Lands

// Si la cadena termina con un string especificado

// endsWith verifica si un string termina con un string especificado si el string especificado es el string con el que finaliza la cadena nos arrojara true

console.log(textoConcat.endsWith("Lands")) // Arroja true porque textConcat termina con el string "Lands"

console.log(textoConcat.endsWith("Campus")) // Arroja false porque textConcat no termina con el string "Campus"

 /* Iterador forEach */

 let informacion = ["Luis","Andrés","Alvarez","Silva","17"]

 informacion.forEach((elementoArray,variableIteradora) => {
    console.log(`${variableIteradora}-${elementoArray}`)
 })
const lenguajes = ['python', 'java', 'php', 'c', 'c++', 'pascal']
const nuevoArreglo = lenguajes.map((lenguaje, indice) => {
    return lenguaje.toUpperCase();
})
console.log(nuevoArreglo);

