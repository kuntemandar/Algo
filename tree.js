function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}
function BinarySearchTree(){
  this.root = null;
}
BinarySearchTree.prototype.push = function(val){
   var root = this.root;

   if(!root){
      this.root = new Node(val);
      return;
   }

   var currentNode = root;
   var newNode = new Node(val); 

   while(currentNode){
      if(val < currentNode.value){
          if(!currentNode.left){
             currentNode.left = newNode;
             break;
          }
          else{
             currentNode = currentNode.left;
        }
     }
     else{
         if(!currentNode.right){
            currentNode.right = newNode;
            break;
         }
         else{
            currentNode = currentNode.right;
         }
     }
  }

}
var bst = new BinarySearchTree();
bst.push(4);
bst.push(2);
bst.push(6);/* 
bst.push(1);
bst.push(5);
bst.push(3)
bst.push(8)
      */
console.log(bst.root)
function updown(root) {
	let rs = []
  let ls = []
  let curr = root
  while(curr.left) {
  	ls.push(curr.left)
    curr = curr.left
  }
  curr = root
  while(curr.right){
  	rs.push(curr.right)
    curr = curr.right
  } 
}
console.log(updown(Object.assign({},bst.root)))
function findpath(root, arr, k, arr2, j) {
	if(root.value === k){
  	arr.push(root.value)
  	console.log(arr)
  }
  if(root.value === j){
  	arr2.push(root.value)
  	console.log(arr2)
  }
  root.left && findpath(root.left, arr.concat(root.value), k, arr2.concat(root.value), j)
  root.right && findpath(root.right, arr.concat(root.value), k, arr2.concat(root.value), j)
}
//findpath(bst.root,[],3, [], 8)

function printSum(root,k,path){
	if(k===root.value && !root.left && !root.right){
  	path.push(root.value)
  	console.log(path,'path')
    return
  }
  if(root.left) {
    path.push(root.value)
  	printSum(root.left,k-root.value,path)
    
  }
  if(root.right) {
    path.push(root.value)
  	printSum(root.right,k-root.value,path)
  }
}
function pl(root){
	let q = []
  let tq = []
  q.push(root)
  
  while(q.length !== 0){
  	tq = [...q]
    q = []
    tq.forEach((e) => {
    	console.log(e.value)
      if(e.left)
      	q.push(e.left)
      if(e.right)
      	q.push(e.right)
    })
  }
}
function sucs(root, val, res){
	if(root.value === val) {
  	if(root.right)
  		res = root.right
    return res.value
  }
  if(root.value > val) {
  	return sucs(root.left,val,root)
  } else {
  	return sucs(root.right,val,root)
  }
}
// console.log(sucs(bst.root,2,bst.root))

function isuni(root) {
	if(!root)
  	return true
  let isvalSame = true
  if(root.left)
  	isvalSame = root.left.value === root.value
  if(isvalSame && root.right)
  	isvalSame = root.right.value === root.value
    
  return isuni(root.left) && isuni(root.right) && isvalSame
}
	
function count(root){
  	if(!root) {
    
    	return {counter: 0, isUni: true }
    }
    let cntL = count(root.left)
    let cntR = count(root.right)
    let isLfsameAsRt = root.left ? root.left.value === root.value : true
    let isRgsameAsRt = root.right ? root.right.value === root.value : true
 
    let cnt =  cntL.counter + cntR.counter + 
    	(isLfsameAsRt && isRgsameAsRt && cntL.isUni && cntR.isUni ? 1 : 0)
    let isuni = isLfsameAsRt && isRgsameAsRt && cntL.isUni && cntR.isUni
    return { counter: cnt, isUni: isuni}
  }

function findmin(root) {
	if(root.left === null)
  	return root.value
  return findmin(root.left)
}
function findmax(root) {
	if(root.right === null)
  	return root.value
  return findmax(root.right)
}

function checkbb(root){
	if(root === null)
  	return { isbst: true, min: Number.MAX_VALUE, max:Number.MIN_VALUE}
  return { isbst: checkbb(root.left) && checkbb(root.right), min: findmin(root.left), max: findmax(root.right)}
}
//console.log(count(bst.root),'ddd')
function inor(root, i) {
	if( i == k)
  return root.value
  
  inor(root.left, i+1)
  
}

function isBST(root) {
  function helper(root, currMin, currMax) {
    if (!root) return true
    if (root.value < currMin || root.value >= currMax) return false
    const isLeftBST = helper(root.left, currMin, root.value)
    const isRightBST = helper(root.right, root.value, currMax)
    return isLeftBST && isRightBST
  }

  return helper(root, -Infinity, Infinity)
}
function postor(root) {
	if(!root)
  	return
	postor(root.left)
  postor(root.right)
  console.log(root.value)
}
function poster(root) {
	let stk = []
  let curr = root
  stk.push(root.value)
  while(curr.right){
  	curr = curr.right
  	stk.push(curr.value)
  }
  curr = root
  while(curr.left) {
    curr = curr.left
  	stk.push(curr.value)
  }
	console.log(stk.reverse().join(' ').trim())  
}

