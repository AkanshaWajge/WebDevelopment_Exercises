// isUniform() array which takes an array as an argument and returns true if 
//all the elements in an array is identical

var arr = [ '1', '1', '1', '1', '1'];
function isUniform( arr)
{
    for(var i = 0; i < arr.length - 1; i++) {
    if(arr[i] !== arr[i+1]) {
        //alert("Non Uniform Array");
        return false;
    }
    else {
        //alert("Uniform Array");
        return true;
    }

}
}
isUniform(arr);