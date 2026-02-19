// Problem 1: Multiplication Table
// Print table of 7 (7 × 1 = 7, 7 × 2 = 14, ...)
function printTable(num) {
   for(let i=1; i <=10; i++){
    console.log(`${num} x ${i}= ${num * i}`);
   }
}
printTable(7);



// Problem 2: Sum of Odd Numbers
// 1 to 50 tak saare odd numbers ka sum
// Answer should be: 625

function sumOfOdd(){
    let sum = 0;
    for(let i=1; i <=50 ; i++){
        if(i % 2 !== 0){
            sum += i
        }
    }
    return sum;
};
console.log(sumOfOdd());



// Problem 3: Factorial
// 5! = 5 × 4 × 3 × 2 × 1 = 120
function Factorial(n){
    let result = 1;
    for(let i=1; i <= n; i++){
        result *= i
    };
    return result;
}
console.log(Factorial(5));



// Problem 4: FizzBuzz (Famous Interview Question!)
// **Rules:**
// ```
// 1 to 30 tak numbers print karo, LEKIN:
// - Agar number 3 se divide ho → "Fizz" print karo
// - Agar number 5 se divide ho → "Buzz" print karo
// - Agar DONO se divide ho → "FizzBuzz" print karo
// - Warna number print karo
// ```

function fizzBuzz(){
    for(let i=1 ; i <= 30; i++){
        if(i % 3 ===0 && i % 5 === 0){
            console.log("FizzBuzz");
        }else if(i % 3 === 0){
            console.log("Fizz");
        }else if(i % 5 === 0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}
fizzBuzz()



// ## Problem 5: Prime Number Check

// **Prime number kya hai?**
// ```
// Prime = Sirf 2 numbers se divide hota hai: 1 aur khud

// Examples:
// 2 → Prime ✅ (1, 2 se divide)
// 3 → Prime ✅ (1, 3 se divide)
// 4 → NOT Prime ❌ (1, 2, 4 se divide)
// 5 → Prime ✅ (1, 5 se divide)
// 6 → NOT Prime ❌ (1, 2, 3, 6 se divide)
// 7 → Prime ✅ (1, 7 se divide)
// ```

// **Logic:**
// ```
// Check karo: 2 se lekar (n-1) tak koi bhi number se divide hota hai?
// - Agar YES → NOT Prime
// - Agar NO → Prime
function isPrime(num){
//    checking 1
     if(num <= 1)return false
     if(num === 2) return true
    //  checking 2
    for(let i=2; i < num; i++){
        if(num % i === 0){
            return false
        };
        return true
    }
}

console.log(isPrime(4));
