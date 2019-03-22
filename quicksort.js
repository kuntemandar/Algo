function qs(arr,l,r){
	if(arr.length < 2)
  	return arr
  
  let p = partition(arr,l,r)
  if(l <= p-1)
  	qs(arr,l,p-1)
  if(r>=p+1)
  	qs(arr,p+1,r)
	return arr
}
function swap(a,i,j){
let t = a[i]
a[i] = a[j]
a[j] = t
}
function partition(arr,l,r){
	var p   = Math.floor((r + l) / 2) //middle 
  swap(arr,p,0)
	while(l <= r){
  	while(arr[l] <= arr[0])
    	l++
    while(arr[r] > arr[0])
    	r--
    if(l<=r){
    	swap(arr,l,r)
      l++
      r--
    } 
  }
	swap(arr,0,r)
  return r
}
let arr = [1,3,5,6,2,99,-7]
let r = arr.length-1
console.log(qs(arr,0,r),'sorted array')
