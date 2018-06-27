//sumArray() to return the sum of elements of the array
var arr = [ -1, -2, 3, 4];
var result = 0;
function sumArray( arr)

{   var i = 0;
    while( i <= arr.length - 1) {
        result += arr[i];
        arr[i++];
    }
    return result;
}
sumArray( arr );

/* 
var arr = [ 1, 2, 3, 4];
var result = 0;
function sumArray( arr)
{  for(var i = 0; i <= arr.length - 1; i++) {
        
        result += arr[i];
    }
    return result;
}
sumArray( arr );

*/
