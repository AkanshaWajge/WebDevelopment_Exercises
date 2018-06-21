//Write a isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise
var num = prompt("Enter any number?");
function isEven(num){
    if(num % 2 == 0){
        return alert("true");
    }
    else{
        return alert("false");
    }
 
}

isEven(num);