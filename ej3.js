// ####################################
// Ejercicio 3 con posible sustentacion
// ####################################

//Creacion de la funcion
function myFunction(array,target) {
    let arreglo=[]
    let suma
    let numero
    for (i=0;i<=array.length; i++) {
        numero=array[i]
        for (y=0; y<=array.length/3; y++) {
            suma=numero+array[y]
            if (suma==target){
                arreglo[y]=[array[y],numero]
            }
        }
    }
    //Resultado-Output
    console.log(arreglo)
}
//Llamado de la funcion-Input
myFunction([2,4,3,6,9,8],10)

//Desarrollado por: Luis Andrés Alvarez Silva