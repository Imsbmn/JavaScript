// Primitive datatype     // call by value hote hai matlab jab bhi hum inko kahi se kahi copy karte hai to inka jo original data hai wo reference memory ko nhi diya jata inko  copy kar ke diya jata hai alag aur jo bhi hum unme changes karte hai wo copy me changes karte hai 

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


// const bigNumber = 3152671752675135523n





// Non-Primitive datatype (Reference type bhi bolte hai )

// Array, Objects, Functions


const heroes = ["Shaktiman", "Balveer", "doga"];     //  Array 


let myObj = {
    name : "Shubham",          // Oject 
    age: 22,
}


const myFunction = function(){
    console.log("Hello World");    // function
}



console.log(typeof bigNumber);    // Data ka type pata karne ke liye
console.log(typeof scoreValue);
console.log(typeof outsideideTemp);
console.log(typeof myFunction);
console.log(typeof heroes);




