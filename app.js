//Se inyecta la funcion exportada
let greet = require('./greet1'); 

//Se inyecta la funcion exportada con la propiedad del modulo (primer forma)
//let greet2 = require('./greet2').greet;

//Se inyecta la funcion exportada con la propiedad del modulo (segunda forma)
let greet2a = require('./greet2');

//Se inyecta el objeto
const greet3 = require('./greet3') //objeto construido/instanciado

//Se inyecta el objeto
const Greet4 = require('./greet4');  // constructor
let myGreet = new Greet4();

// Se inyecta la funcion
const greet5 = require('./greet5');

//Se accede a la funcion
greet(); 

//primera forma propiedad
//greet2a();

//Segunda forma propiedad
greet2a.greet(); 

//Se accede al objeto
console.log(greet3); 
greet3.greet(); 

//Se cambia el valor de la propiedad greeting
greet3.greeting = "Hello from the App";
//Se inyecta el objeto
let greet3b = require ('./greet3');
//Se accede al objeto
greet3b.greet(); 

//Se accede al constructor
myGreet.greet(); 

//Se accede al objeto
greet5.greet();
greet5.jump();
greet5.run(); 