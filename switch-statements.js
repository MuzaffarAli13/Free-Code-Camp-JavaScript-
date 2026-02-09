// function caseInSwtch(val){
//     var answer = "";
//     switch(val){
//         case 1:
//             answer = "alpha";
//             break;
//         case 2:
//             answer = "beta";
//             break;
//         case 3:
//             answer = "gamma";
//             break;
//         case 4:
//             answer = "delta";
//             break;
//     }
//     return answer;
// }
// console.log(caseInSwtch(2));

// Default option in Switch Statement
// function defaultOption(val){
//     let answer = "";
//     switch(val){
//         case "a":
//             answer = "Apple";
//             break;
//         case "b":
//             answer = "Bird";
//             break;
//         case "c":
//             answer = "cat";
//             break;
//         default:
//             answer = "Stuff";
//             break;
//     }
//     return answer
// }
// console.log(defaultOption("3"));


// Multiple Indentical Options in Switch Statements
// function  multipleIndentical(val){
//     let answer = "";
//     switch(val){
//         case 1:
//         case 2:
//         case 3:
//             answer = "Low";
//             break;
//         case 4:
//         case 5:
//         case 6:
//             answer = "Mid";
//             break;
//         case 7:
//         case 8:
//         case 9:
//             answer = "High";
//             break;
//         default :
//            answer = "Try Again";
//            break;
//     }
//     return answer;
// }
// console.log(multipleIndentical(2));


// RetruningBoolean Values From Function
// function returnValues(a,b){
//     return a < b;
//     // if (a < b) {
//     //     return true;
//     // }else{
//     //     return false;
//     // }
// };
// console.log(returnValues(10,5));



// Returning early pattern from function
// function abTest(a,b){
//     if(a < 0 || b < 0){
//         return undefined
//     }
// return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b),2));
// }
// console.log(abTest(2,2));


// Counting Cards
// var count = 0;
// function cc(card){
//     switch(card){
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count++;
//             break;
//         case 10:
//         case "J":
//         case "A":
//         case "Q":
//         case "K":
//             count--;
//             break;
//     }
//     var holdbet = "hold";
//     if(count > 0){
//         holdbet = "bet"
//     }
//     return `${count} ${holdbet}`
// }

// cc(2);cc(3);cc(1)
// console.log(cc(2));


