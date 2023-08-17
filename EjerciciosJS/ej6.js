// Funcion para rellenar valores
function fillValues() {
    let array= new Array(10)
    let number;
    for (let i=0;i<10;i++) {
        number=Math.floor(Math.random()*50)
        array[i]=number
    }
    return array
}
// Funcion para imprimir valores
function printValues(array) {
    for (let i=0;i<array.length;i++){
        console.log(`Indice ${i}: Valor ${array[i]} `)
    }
}
printValues(fillValues())