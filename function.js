// Word blanks
// function WordBlanks(myNoun,myAdjective,myVerb,myAdverb){
//     var result = "";
//     result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
//     return result  
// }

// console.log(WordBlanks("dog","big","ran","quickly"));
// console.log(WordBlanks("bike","slow","flew","slowly"));



// Write Reusable with Functions
// function reusableFunction() {
//     console.log("Hello World!");
// }
// reusableFunction()
// reusableFunction()

// Passing values to function with Arguments
// function functionWithArgs(a,b) {
//     console.log(a + b);
// }
// functionWithArgs(10,5);



// global Scope and Function
// var myGlobal = 10;
// function fun1(){
//    console.log(myGlobal);
// }
// fun1()]
// console.log(myGlobal);



// Local Scope And Functon
// function myLocalFunc(){
//     var mylocalvar = 5;
//     console.log(mylocalvar);
// }
// myLocalFunc()
// console.log(mylocalvar); // error variable not found


// Global vs Local Scope in Function
// var outerWear = "T-Shirt";
// function myOutfit(){
//     var outerWear = "sweter"
//     return outerWear
// }
// console.log(myOutfit()); // sweter
// console.log(outerWear); T-Shirt


// Return Value from a Function using return keyword
// function timesFive(num){
//     return num * 5
// }
// console.log(timesFive(5));
// console.log(timesFive(2));


// UnderStanding undefined Value from a Function
// var sum = 0;
// function addfive(){
//     sum += 5;
// }  // Not return means Undefied 



// Sum of Multiple Numbers Logic
// var numbers = [0, 1, 2, 3, 4, 5];
// function sumArray(arr){
//     let total = 0;
//     for (let element of arr){
//         total += element
//     }
//     console.log(total);
// }
// sumArray(numbers) 



// Asignment with a return value
// var processed = 0;
// function processedArg(num){
//     return (num + 5) / 3
// }
// processed = processedArg(10);
// console.log(processed);


// Stand In Line   
function nextInLine(arr,item){
    arr.push(item) 
    return arr.shift()
}
var testArr = [1,2,3,4,5];
console.log("Before " + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After " + JSON.stringify(testArr));
// How It work 