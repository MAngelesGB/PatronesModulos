//Se crea un un constructor (Los constructores inician con mayusculas)
module.exports = function Greetr() {
    this.greeting = 'Hello from the function constructor greet4'; 
    this.greet = function (){
        console.log(this.greeting);
    }
}