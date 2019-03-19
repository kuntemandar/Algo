

function permMain(arr) {
	perm(arr.split(''),0)
}
function perm(arr, i) {

	if(i === arr.length-1) { 
  	console.log(arr.join(''))
  	return
 	}
  for(var j=i; j<arr.length;j++){
  	let sa = swap(arr,i,j)
    perm(sa, i+1)
    swap(sa,i,j)
  }
}
function swap(input, index_A, index_B) {
  var temp = input[index_A];
  input[index_A] = input[index_B];
  input[index_B] = temp;
	return input
}
permMain('abc')

