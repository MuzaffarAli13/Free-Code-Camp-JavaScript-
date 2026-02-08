
// Use Conditional Logic with If Statements
// function trueOrFalse(wasThatTrue){
//     if (wasThatTrue){
//         return "Yes That was True"
//     }
//     return "No That was false"
// }
// console.log(trueOrFalse(true));



// Equality Operators
// function testEqual(val) {
//     if(val == 12){
//         return "Equal"
//     }
//     return "Not Equal"
// }
// console.log(testEqual(10));


// Strict Equality 
/*
3 === 3
3 === "3"
*/

// function testEqual(val) {
//     if(val === 12){
//         return "Equal"
//     }
//     return "Not Equal"
// }
// console.log(testEqual("12"));


// Practice Comparing Different Values
// function PracticeComparing(a,b){
//     if(a === b){
//         return "Equal"
//     }
//     return "Not Equal"
// }

// console.log(PracticeComparing(10,"10"));



// Ineqaulity Operator 
// function Ineqaulity(value){
//     if(value != 99){ // Not Equal to
//         return "Not Equal"
//     }
//     return "Equal"
// }

// console.log(Ineqaulity(9));


// Comparision with strict inequality 
// function Ineqaulity(value){
//     if(value !== 99){ // Not Equal to
//         return "Not Equal"
//     }
//     return "Equal"
// }

// console.log(Ineqaulity("99"));


// Comparision with the Logicl And Operator
// function testGreaterThen(val){
//     if(val > 100){
//         return "Over 100";
//     }
//     if(val > 10){
//         return "Over 10";
//     }
//     return "10 or under"
// }
// console.log(testGreaterThen(10));



// greater Than or equal to 
// function testGreaterThanAndEqualto(val){
//     if (val >= 20) {
//         return "20 or Over"
//     }

//     if (val >= 10) {
//         return "10 or Over"
//     }
//     return "Less than 10"
// }
// console.log(testGreaterThanAndEqualto(10));


// lessthan operator
// function testLessThan(val){
//     if(val < 25){
//         return "uder 25";
//     }
//     if(val < 55){
//         return "under 55";
//     }
//     return "Above 55"
// }
// console.log(testLessThan(78));



// lessthan or Equal operator
// function testLessOrEqual(val){
//     if(val <= 25){
//         return "uder 25";
//     }
//     if(val <= 55){
//         return "under 55";
//     }
//     return "More 55"
// }
// console.log(testLessOrEqual(25));



// And operator
// function testLogicalAnd(val){
//     if(val <= 50 && val >= 25){
//         return "Yes"
//     }
//     return "Not"
// }
// console.log(testLogicalAnd(26));



// Logical OR operator
// function testlogicalOr(val){
//     if(val <= 10 || val >= 20){
//         return "Outside"
//     }
//     return "InSide"
// }
// console.log(testlogicalOr(12));



// Else
// function testElse(value){
//     if(value <= 5){
//         return "Lessthan 5";
//     }else {
//        return "Greater Than 5"
//     }
// }
// console.log(testElse(4));


// Else if
// function testElseIf(value){
//     if(value >= 10){
//         return "more 10";
//     }else if(value <= 5){
//        return "Less than 5"
//     }else {
//         return "Between 5 and 10"
//     }
// }
// console.log(testElseIf(6));


// Logical order in If statement 
// function testLOGIC(value){
//     if(value < 5){
//         return "LessThan 5";
//     }else if(value < 10){
//        return "Less Than 10"
//     }else {
//         return "More than 10"
//     }
// }
// console.log(testLOGIC(6));


// Chaining if else statements
// function testSize(num){
//     if (num < 5) {
//         return "Tiny"
//     }else if(num < 10){
//         return "Small"
//     }else if(num < 15){
//         return "Medium"
//     }else if(num < 20){
//         return "Large"
//     }else{
//         return "Huge"
//     }
// }
// console.log(testSize(2));


// Golf Code
// var names = ["Hole-in-one!","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home!"]
// function golfScore(par,strokes){
//     if(strokes == 1){
//         return names[0]
//     }else if(strokes <= par -2){
//         return names[1]
//     }
//     else if(strokes == par -1){
//         return names[2]
//     }
//     else if(strokes == par){
//         return names[3]
//     }
//     else if(strokes == par +1){
//         return names[4]
//     }
//     else if(strokes == par +2){
//         return names[5]
//     }
//     else if(strokes >= par +3){
//         return names[6]
//     }
// }
// console.log(golfScore(1,4));


