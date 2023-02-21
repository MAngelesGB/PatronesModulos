//Se crea una funcion
let greeting = "Hello from greet 5"; 

let greet = () => {console.log(greeting);}
let jump = () => {console.log(`I'm jumping`);}
let run = () => {console.log(`I'm running`);}

// Se exporta como objeto
// si la llave y el valor tienen el mismo nombre se puede omitir uno de ellos
module.exports = {
    //greet: greet
    greet,
    run,
    jump
}