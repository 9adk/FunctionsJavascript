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
let num = parseInt(prompt("Enter the no"));
checkPalindrome(num);
