let persona = {
    name : "Andres",
    age : 17,
    movies: {
        primera : {
            nombre:"KungFuPanda",
            duracion:"1:00:00"
        },
        segunda : {
            nombre:"Fight Club",
            duracion:"1:20:00"
        }
    }
}

const {nombre} = persona.movies.primera;

console.log(persona.age);
console.log(persona.name);
console.log(nombre); // Accedemos al nombre de la ruta especificada en la variable
console.log(persona.movies.segunda); // Accedemos al nombre de la segunda pelicula de manera secuencial

// Esto se usa para simplificar la forma en la que accedemos a un objeto,
// reduciendo toda la ruta de acceso a una variable

let centroComercial = {
    gerente : "Pedrito Suarez",
    local1 : {
        ocupado : true,
        negocio : "Venta de helados",
        empleados : {
            primero : {
                nameJuana : "Juana",
                edad : 20
            },
            segundo : {
                nameCarlos : "Carlos",
                edad : 45,
                mascotas : {
                    primero : {
                        name : "Roki"
                    },
                    segundo : {
                        nameCat :" Susy"
                    }
                }
            }
        }
    }
}
//Formas de desestructuracion de valores anidados

// Primer manera
const {name} = centroComercial.local1.empleados.segundo.mascotas.primero; 
console.log(name);

// Segunda manera
const {local1:{empleados:{segundo:{mascotas:{segundo:{nameCat}}}}}} =  centroComercial 
console.log(nameCat);

// Primera forma
const {nameCarlos} = centroComercial.local1.empleados.segundo
console.log(nameCarlos);

// Segunda forma
const {local1:{empleados:{primero:{nameJuana}}}} = centroComercial;
console.log(nameJuana);

const encabezado = document.head;
console.log(encabezado);    

const domain = document.domain; // <- Domain es una palabra clave con la que podemos acceder al numero de localhost de la página
console.log(domain);

const uri = document.baseURI; // <- baseURI tambien es una palabra clave, con esta traemos el link(url) completo de nuestra page
console.log(uri);

const formularios = document.forms;
console.log(formularios);

const formHijos = document.forms[0]; // <- Imprime el primer formulario de la página
console.log(formHijos);

const labelito = document.forms[0].children[1]
console.log(labelito);

const inputcito = document.forms[0].children[0]
console.log(inputcito);

const placeHolder = document.forms[0].children[1].placeHolder
console.log(placeHolder);

const enlaces = document.links
console.log(enlaces);

