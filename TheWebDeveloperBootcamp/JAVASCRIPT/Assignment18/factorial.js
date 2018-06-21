//Write a function factorial() which takes a single number and return a return a factorial of that.
var varb = prompt("Enter any number");
var result =1
if (varb=0){
    
    return result;
}
else{
function factorial(varb){
  var result= 1;

  for(i=1; i <= varb; i++){
      result= result*i;

  }
      return result;

  }
}
factorial(varb);