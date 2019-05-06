function heapifyUp(arr, val){
	let len = arr.length
  arr[len] = val
  while(len >= 0){
  	let par = getparentIndex(len)
  	if(getparent(arr,len) > val){
    	swap(arr,par,len)
    }
    len--
  }
}
function heapifyDown(arr){
	let len = arr.length-1
  let i = 0
  while(i < len) {
    if(arr[i] > getLeftChild(arr,i) || arr[i] > getRightChild(arr,i) && getRightChild(arr,i) != undefined){
    	let min = getLeftIndex(i)
      if(arr[min] > getRightChild(arr,i))
      	min = getRightIndex(i)
      swap(arr, min, i)
    }
  	i++
  }
}
function swap(arr, i , j){
let t = arr[i]
arr[i] = arr[j]
arr[j] = t
}
function getparent(arr, index){
	return arr[Math.ceil((index-1)/2)]
}
function getRightChild(arr, index) {
	return arr[index*2 + 2]
}
function getLeftChild(arr, index) {
	return arr[index*2 +1]
}
function getparentIndex(index){
	return Math.ceil((index-1)/2)
}
function getRightIndex(index){
	return index*2+2
}
function getLeftIndex(index){
	return index*2+1
}
function heapSort(arr){
	let newArr = []
	arr.forEach(e => heapifyUp(newArr,e))
  arr = []
  console.log(newArr)
  while(newArr.length) {
    arr.push(newArr[0])
    newArr[0] = newArr[newArr.length-1]
    newArr.pop()
    heapifyDown(newArr)
    console.log(newArr, 'sofar')
  }
  console.log(arr)
}

heapSort([2,1,7,0,8,3])
