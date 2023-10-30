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
                nombre : "Juana",
                edad : 20
            },
            segundo : {
                nombre : "Carlos",
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

// Segunda forma
const {local1:{empleados:{segundo:{mascotas:{segundo:{nameCat}}}}}} =  centroComercial 

console.log(nameCat);
