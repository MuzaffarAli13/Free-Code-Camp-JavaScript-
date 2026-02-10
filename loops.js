// var myArray = [];
// var i = 0;
// while(i < 5){
//    myArray.push(i);
//    i++;
// };
// console.log(myArray);



// Iterate with for loops
// var myArray = [];
// for(let i = 0; i < 5; i++){
//     myArray.push(i);
// };
// console.log(myArray);


// Iterate Odd number with a for loops
// var myArray = [];
// for(let i = 1; i < 10 ; i += 2){
//     myArray.push(i)
// }
// console.log(myArray);



// Count Backwords with loops
// var myArray = [];
// for (let i = 9; i > 0; i -= 2){
//    myArray.push(i)  
// };
// console.log(myArray);



// Iterate throug an Array with a For Loops
// var myArray = [1,2,3,4,5];
// var total = 0;

// for(let i = 0; i < myArray.length; i++) {
//     total += myArray[i]
// }
// console.log(total);



// Nested For loops
// function multiplayAll(arr){
//     let products = 1;
    
//     for(let i=0; i < arr.length; i++){
//       for(let j=0; j < arr[i].length; j++){
//        products *= arr[i][j];  
//       }
        
//     }
    
//     return products
// }

// let product = multiplayAll([[1,2],[3,4],[5,6]]);
// console.log(product)



// Iterate With Do While Loop
// var myArray = []
// var i = 10
// do {
//     myArray.push(i);
//     i++
// }while (i < 5);
// console.log(myArray);


// Profile Lookup
// var profiles = [
//   {
//     "firstName": "Ahmed",
//     "lastName": "Khan",
//     "number": "03011223344",
//     "likes": ["Biryani", "Karahi"]
//   },
//   {
//     "firstName": "Sara",
//     "lastName": "Malik",
//     "number": "03144556677",
//     "likes": ["Pasta", "Pizza"]
//   },
//   {
//     "firstName": "Usman",
//     "lastName": "Raza",
//     "number": "03219876543",
//     "likes": ["Zinger", "Fries"]
//   },
//   {
//     "firstName": "Ayesha",
//     "lastName": "Hussain",
//     "number": "03455667788",
//     "likes": ["Sandwich", "Noodles"]
//   }
// ];

// function lookupProfie(name,prop){
//     for(let i=0; i < profiles.length; i++){
//         if(profiles[i].firstName === name){
//             return profiles[i][prop] || "Not Such a property"
//         }
//     }
//     return "Not Such a Contact"
// };

// var data = lookupProfie("Sara","likes");
// console.log(data);



// Genrate Random fractions
// function randomFractions(){
//     return Math.random();
// };
// console.log(randomFractions());
