let byId = document.querySelector('#titulo-h1')
let byClass = document.querySelector('.titulo-h2')
let byTarget = document.querySelector('p')


console.log(`Por Id: ${byId.textContent}\n\nPor Clase: ${byClass.textContent}\n\nPor etiqueta: ${byTarget.textContent}`)

// querySelectorAll selecciona cualquier etiqueta que tenga aquello que se le especifica  

let targetsWithClassGeneral = document.querySelectorAll('.general')

targetsWithClassGeneral.forEach((elemento) => {
    console.log(elemento)
})

// Con .style podemos acceder al css desde javascript

byId.style.backgroundColor = "red";

byId.style.color = "white";

// Generar html desde javascript

// Para crear una nueva etiqueta desde javascript

let element = document.createElement("p")

element.textContent = "Hola jajajaja";

/* document.body.insertBefore(element,byId); */  // <- Pone a 'element' antes de byId 

/* document.body.appendChild(element); */

let vacio = document.querySelector(".empty");

vacio.appendChild(element);

// Better form
// document.querySelector("body").insertAdjacentHTML('beforeend','<p>Hola mundo</p>')

// Local Storage <- JSON

const mascota = {
    nombre: 'Tony',
    edad: '2 años',
}

//Guardamos la información y convertimos a string el objeto

localStorage.setItem('xd', JSON.stringify(mascota));

//Obtenemos el objeto del local storage y lo guardamos

let mascotaGuardada = localStorage.getItem('xd');

//Convertimos la información a un objeto nuevamente

mascotaGuardada = JSON.parse(mascotaGuardada);

console.log(localStorage);
//Imprimir información

console.log(`Nombre: ${mascotaGuardada.nombre}`);
console.log(`Edad: ${mascotaGuardada.edad}`);

/* localStorage.removeItem('xd');  */ // <- Nombre que puse en la cadena del setItem o nombre como almacene la info 


// OBJETOS LITERALES

let estudiante = {
    nombre: "Andres",
    edad: 17,
}
// De esta forma imprimimos un objeto con una llave estudiante y como valor tiene el diccionario anterior.
console.log(
    {
        estudiante: estudiante
    }
);
// Lo anterior lo podemos hacer tambien de esta manera, como la llave tiene el mismo nombre que el diccionario es posible hacer esto.
console.log(
    {
        estudiante
    }
);

// OPERADOR SPREAD 

// Para clonar diccionarios 

const carro = {
    placa: 123456,
    modelo: 2006
}

console.log("Carro normal: ", carro);

let nuevoCarro = { ...carro }

console.log("Nuevo carro: ", nuevoCarro);

// Desestructuracion - Forma avanzada

let perro = {
    nombre: "Brus",
    patas: 4,
    dueños: {
        cantidad: 2
    }
}

const { nombre, patas, dueños: { cantidad } } = perro;

console.log(nombre);
console.log(patas);
console.log(cantidad);

// PROMESAS


/* promesa.then // <- Para promesas que se resolvio correctamente

promesa.catch // <- Promesa que no se resolvio correctamente

promesa.finally */ // <- Cuando termina la compilacion de la promesa

const aprobar = true;

//Creamos la promesa

const promesa = new Promise((resuelta, rechazada) => {
    setTimeout(() => {
        if (aprobar) {
            resuelta(); // Si aprobar es true el program entra a esta seccion y la promesa se toma como realizada
            /* console.log("Aprobada"); //resolver */
        } else {
            rechazada(); // Si aprobar es false el programa entra a esta seccion y la promesa se toma como rechazada
            /* console.log("Desaprobada"); //rechazar */
        }
    }, 2000  // <- 2000 -> Dos segundos
    );
});

//Estados de la promesa
promesa
    .then(() => console.log("La promesa se cumplió"))
    .catch(() => console.log("La promesa no se cumplió"))
    .finally(() => console.log("La promesa finalizó"))

// FETCH API  


// Peticion Archivo de texto en mi proyecto

fetch("../EjerciciosJS/ej6.js") // Seleccion archivo ej6.js
.then((respuesta)=> respuesta.text() /*Si cumple */)
.then((data)=> console.log(data))
.catch(()=> console.log("Error"))
.finally(()=> console.log("Peticion finalizada"))

// Peticion Api Que genera usuarios random

let obtener = async()=> {
    let peticion = await fetch("https://64f202d20e1e60602d2490a1.mockapi.io/usuario");
    let res = await peticion.json();
    console.log(res);
} 

let enviar = async()=> {
    let obj = {
        "cedula": 1098650643,
        "nombre": "XD",
        "apellido": "xd",
        "edad": 17,
        "id": 999
    };
    let peticion = await fetch("https://64f202d20e1e60602d2490a1.mockapi.io/usuario",{
        method:"POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(obj)
    });
    let res= await peticion.json()
    console.log(res)
}

let eliminar = async(id)=> {
    let peticion = await fetch(`https://64f202d20e1e60602d2490a1.mockapi.io/usuario/${id}`,{
        method:"DELETE",
        headers: {'Content-Type':'application/json'},
    });
    let res= await peticion.json()
    console.log(res)
}
await eliminar(21);   
await eliminar(33);      

/* enviar(); */

/* obtener(); */


/* fetch("https://64f202d20e1e60602d2490a1.mockapi.io/usuario") //Petición a la URL o ruta
.then((respuesta) => respuesta.json())//Convertir a JSON
.then((data) => console.log(data)) //Imprimir la información
.catch(() => console.log("Error al traer la informacíon"))
.finally(() => console.log("Petición finalizada")) */

// La funcion fetch() <- Permite traer informacion de la url indicada entre parentesis 


// async() y await() van de la mano, es decir para usar una de estas funciones es necesario usar la otra para que el codigo funcione