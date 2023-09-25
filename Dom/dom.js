let byId=document.querySelector('#titulo-h1')
let byClass=document.querySelector('.titulo-h2')
let byTarget=document.querySelector('p')


console.log(`Por Id: ${byId.textContent}\n\nPor Clase: ${byClass.textContent}\n\nPor etiqueta: ${byTarget.textContent}`)

// querySelectorAll selecciona cualquier etiqueta que tenga aquello que se le especifica  

let targetsWithClassGeneral=document.querySelectorAll('.general')

targetsWithClassGeneral.forEach((elemento) => {
    console.log(elemento)
})