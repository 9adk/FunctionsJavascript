var prompt = require('prompt-sync')();
function convertToCelsius(f){
    let c = (f - 32) * 5/9;
    console.log("Conversion of "+f+"F to degree celsius is: "+c+" C");
}
function convertToFahrenheit(c){
    let f = (c * 9/5) + 32;
    console.log("Conversion of "+c+"C to Fahrenheit is: "+f+" F");
}
let choice = prompt("1.Convert degC to Fahrenheit 2.Convert degF to Celsius : ");
switch(parseInt(choice)){
    case 1:
        var c = prompt("Enter the value for degC between 0 and 100: ");
        c = parseInt(c);
        if(0 <= c && c <= 100){
            convertToFahrenheit(c);
        }else{
            console.log("Enter the valid input");
        }
        break;
    case 2:
        var f = prompt("Enter the value for degF between 32 and 212: ");
        f = parseInt(f);
        if(32 <= f && f <= 212){
            convertToCelsius(f);
        }else{
            console.log("Enter the valid input");
        }
        break;
}
