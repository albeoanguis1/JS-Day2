//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for (let i = 0; i < Object.keys(person3).length; i++){
    if(Array.isArray(Object.values(person3)[i])){
        console.log(Object.values(person3)[i])
    }
}



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class issaPerson{
    constructor(name, age, gender, haircolor, eyecolor, height, ssn){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.haircolor = haircolor;
    this.eyecolor = eyecolor;
    this.height = height;
    this.ssn = ssn;
    }
    printInfo(){
        return `Name: ${this.name}\nAge: ${this.age}\nGender: ${this.gender}\nHaircolor: ${this.haircolor}\nEyecolor: ${this.eyecolor}\nHeight: ${this.height}\nSSN: ${this.ssn}`
    }
    counter(){
        return function() {
            return this.age + 1
        }
    }
}

let wayne = new issaPerson('Wayne Campbell', 26, 'Male', 'Black', 'Brown', 'Tall', 246957891)
let garth = new issaPerson('Garth Algar', 28, 'Male', 'Blonde', 'Green', 'Taller', 123456789)

console.log(wayne.printInfo())
console.log(garth.printInfo())

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checker = (string) => {
    return new Promise((resolve, reject) => {
        if(string.length > 10){
            resolve('Big Word')
        } else{
            reject('Small Number')
        }
    })
}

console.log(checker('Mississippi'))
console.log(checker('Alaska'))


//CodeWARS
// Reversed Strings
function solution(str){
    return str.split('').reverse().join('');
  };


//DNA TO RNA CONVERSION
function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
}