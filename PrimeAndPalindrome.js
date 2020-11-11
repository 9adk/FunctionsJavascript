var prompt = require('prompt-sync')();
function checkPalindrome(number){
    let temp = 0;
    let number2 = number;
    while(number > 0){
        temp = number % 10 + temp * 10;
        number = parseInt(number / 10);
    }
    if(number2 == temp){
        console.log(number2 + " is palindrome");
    }else{
        console.log(number2 + " not palindrome");
    }
    console.log(temp);
    return temp;
}
function isPrime(primeInput){
    for (var i = 2; i < Math.sqrt(parseInt(primeInput)); i++) {
        if (primeInput % i == 0) {
            return false;
        }
    }
    return true;
}
let value = parseInt(prompt("Enter the number: "));
if(isPrime(value)){
    console.log("It is prime no.");
    let palindrome = checkPalindrome(value);
    if(isPrime(palindrome)){
        console.log("The palindrome of the prime is also prime");
    }else{
        console.log("The palindrom of the prime is not a prime no");
    }
}else{
    console.log(value + " is not a prime no.");
}