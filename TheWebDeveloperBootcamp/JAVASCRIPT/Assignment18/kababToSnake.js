//Write which take a kebabCased string argument and returns the snakeCased version
var str = prompt("Write a kebabCased string");
function kababToSnake(str){
   var result= str.replace(/-/g, "_");
    var  newstr = alert(result);
   return newstr;
}
kababToSnake(str);