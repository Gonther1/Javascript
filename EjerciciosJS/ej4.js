// ####################################
// Ejercicio 4 
// ####################################

// let listaPares=[];
// let listaImpares=[];
let pares=0;
let impares=0;
for (i=1; i<=578934; i++) {
    if (i%2==0) {
        pares+=i;
        // listaPares.push(i);
    }
    else {
        impares+=i;
        // listaImpares.push(i);
    }
}
// console.log(`Los numeros pares son ${listaPares}`)
// console.log(`Los numeros impares son ${listaImpares}`)
console.log(`La suma de los numeros pares es ${pares}`)
console.log(`La suma de los numeros impares es ${impares}`)
