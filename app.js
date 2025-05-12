////1
// const scoreDolphins = (96+108+99)/3
// const scoreKoalas = (88+91+110) / 3

// console.log("dolphins:" , scoreDolphins , "koalas:" , scoreKoalas)

////2

// if (scoreDolphins > scoreKoalas){
//     console.log("Dolphins win the trophy")
// }

// else if (scoreKoalas > scoreDolphins) {
//     console.log("koalas win the trophy")
// }
// else if (scoreKoalas === scoreDolphins) {
//     console.log("Both win the trophie")
// }

//// 3

// if (scoreDolphins > scoreKoalas && scoreDolphins > 100){
//     console.log("Dolphins win the trophy")
// }

// else if (scoreKoalas > scoreDolphins && scoreKoalas> 100) {
//     console.log("koalas win the trophy")
// }
// else if (scoreKoalas === scoreDolphins && scoreDolphins > 100 && scoreKoalas > 100) {
//     console.log("Both win the trophie")
// }

// else {
//     console.log("No one wins the trophy !!! ")
// }

///////////////////////////// coding challange 4 : 

// const bill = 40;

// ///// condition ? true : false
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

// console.log(tip);

// console.log(
//   `the bill was ${bill} ,  the tip was ${tip} , and the total value ${
//     bill + tip
//   }`
// );



"use strict"   //// best practice ... 


////// functions ::: 
/// dry ===> d'ont repeat yourself ... 


///// generic function 
// function welcome (){         /// ()==> parametre  {.....} ==> function body .. 
//     console.log("hello")
// }


///// invocation // call the function /// run the function ... 

// welcome()


/// ()   ===> parametres ... 

//// generic function ..
// function fruitProcessor (x , y){
//  console.log(`${x} apples and ${y} oranges`)
// }


///// invocation // call the function /// run the function ... 
// fruitProcessor(7,5)
// fruitProcessor(20,30)
// fruitProcessor(2,90)


//  const sayHello = function (){
//     console.log("hello mouna ..... ")
//  }

//  sayHello()


///// function declaration :: 

// function fruit (apples , oranges){
// const juice = `juice with ${apples} apples and ${oranges} oranges`
// return juice

// }

// console.log(fruit(20,50))


/// function expression :: 
// let fruit = function (apples , oranges){
// const juice = `juice with ${apples} apples and ${oranges} oranges`
//  return juice

//  }

//  console.log(fruit(100,300))



//// arrow function ::

/// first syntax : 

// const now = 2025 ; 

// const calcAge = function (birthYear){
// return  now - birthYear
// }
// const calcAge = birthYear => now - birthYear 

// console.log(calcAge(1998))

/// second syntax ::

// const yearsUntilRetirement = birthYear => {
// const age = now-birthYear
// const retirement = 60 - age
// return retirement
// } 


// console.log(yearsUntilRetirement(1978))


///// third syntax :: 

// const now  = 2025

//  const yearsUntilRetirement = (birthYear , firstName) => {
//  const age = now-birthYear
//  const retirement = 60 - age
//  return `${firstName} retires in ${retirement} years ....`
//  } 


//  console.log(yearsUntilRetirement(1992, "jhon"))


///// function calling other function ....

///// first exemple :: 

// const cutPieces = fruit => fruit * 4 


// function fruitProcessor (apple , orange ){


//  const applePieces = cutPieces(apple)
//   const orangePieces = cutPieces(orange)
//   let juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces pf orange`
//  console.log(juice)


// }

// fruitProcessor(5,20)

////// second exemple :: 

const now  = 2025 ; 

const calcAge = function (birthYear){
    return now - birthYear
}

/// ""(double cotation)  ; '' (single contation) ; `` (backticks)

// function yearsUntilRetirement (birthYear , firstName) {
//     const age = calcAge(birthYear)
//     const retirement = 60 - age ;

//     if (retirement > 0 ) {
//         const result =   `${firstName} retires in ${retirement} years ...`
//         return result
       

// }

// else {
// return `${firstName} has already retires ... `
// }
// }



// console.log(yearsUntilRetirement(1950 , "steven"))















