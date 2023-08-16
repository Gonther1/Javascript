// ####################################
// Ejercicio 3 con posible sustentacion
// ####################################

//Creacion de la funcion
function myFunction(array,target) {
    let arreglo=[]
    for (i=0;i<array.length; i++) {
        for (y=0; y<=array.length/3; y++) {
            if (array[i]+array[y]==target){
                arreglo[y]=[array[y],array[i]]
            }
        }
    }
    //Resultado-Output
    console.log(arreglo)
}
//Llamado de la funcion-Input
myFunction([2,4,3,6,9,8],10)

//Desarrollado por: Luis Andrés Alvarez Silva

