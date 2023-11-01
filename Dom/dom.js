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