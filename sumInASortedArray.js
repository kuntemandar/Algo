/* 1, 2, 5, 6, 8, 12, 13, 15, 19

25 */

const isSumAvailable = (arr, sum) => {
  let p2 = arr.length - 1;
  
  for(i=0;i<arr.length && i < p2;){
  	const currentSum = arr[i] + arr[p2];

  	if(currentSum=== sum) {
    	return { num2: arr[i], num3: arr[p2] }
    }
   if(currentSum < sum) {
   	i++
  	}
    if(currentSum > sum ) {
    	p2--
    }
	}
  return false
}

const getSum = arr => {
	let i = 0;
  let result;
  
	while( i < arr.length) {
    
    result = isSumAvailable(arr.slice(i+1), 20 - arr[i]);
    if(!result){
    	i++;
    	continue;
    } else {
    	break;
    }
  	
  }
  console.log({num1: arr[i], ...result}, 'result');
}

console.log(getSum([ 1, 2, 5, 6, 8, 12, 13, 15, 19]))



