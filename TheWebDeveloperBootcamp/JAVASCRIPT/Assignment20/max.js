//max() returns the highest element in the array
var arr = [ 5, 6 , 10 ,-1];
var maxN = 0;
function max( arr)
{  for(var i = 0; i <= arr.length - 1; i++) {
        if(maxN < arr[i]){
            maxN = arr[i];
        }
  }
  return maxN;
}
max( arr );