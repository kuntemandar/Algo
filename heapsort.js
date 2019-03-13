let arr = [3,2,1,5,4,7,6]

function hs(a) {

	let na = []
  na[0] = -1
  for(let i =0; i <= arr.length; i++) {
  	let j =i+1
    na.push(a[i])
  	while(j > 0) {
    	let pi = Math.floor(j/2)
    	if(na[j] < na[pi]) {
      	temp = na[j]
        na[j] = na[pi]
        na[pi] = temp
      }
      j = pi
    }
  }
  na.pop()
	return na
}

function ph(a) {
	let na = []
	let i =1
  a.shift()
	while(i < a.length) {
  	na.push(a.shift())
    console.log('-----------')
    console.log(na,'na')
    console.log(a,'a')
    if(na[i] >na[i*2]) {
    	let temp = na[i]
      na[i] = na[i*2]
      na[i*2] = temp
      i = i*2
    } else if (na[i] > na[i*2+1]) {
    	let temp = na[i]
      na[i] = na[i*2+1]
      na[i*2+1] = temp
      i=i*2+1
    }
  }
  return na
}
console.log(ph(hs(arr)))

/* //pusedo code

add item in array
while( i > 0)
if(a[i] < floor(a[i/2])) {
  swap a[i] and a[i/2]
  i= i/2
}  

pull first elem

put last elem in first place

re arrange tree
 take first item into new array 
while( i < a.length)
	if(!a[i*2])
  	break;
	if(a[i] > a[i*2])
  	swap a[1] and a[2], i = i*2
  else if(a[i] > a[i*2+1])
  	swap a[1] a[3], i = i*2 +1

*/
