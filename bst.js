// declare bst and set root is null
// if root is null then create new node and assign to root
// if value < root, and left node exists curr = left else insert as left node 
// if value > root, and right node exists curr = right else insert as right node
//DElete
// dfs traversal, if root.left.val = val && isleaf(root.left) root.left = null
// if root.left.val = val and root.left.left ? root.left = root.left.left
// if root.right.val = val && isleaf(root.right) right =null
// if right.val = val and root.right.right ? root.right = root.right.right
// else if (val > root.val) go right
// else go left
BinarySearchTree.prototype.delete = function(value) {
	let lastR = null
	if(this.root === null)
  	return
  let curr = this.root
  let par = null
  
  while(curr){
  	if(value > curr.value) {
    	if(curr.right) {
      	par = curr
    		curr = curr.right
      	lastR = true
      } else {
      	curr = null
      }
    } 
    if( value < curr.value) {
    	if(curr.left){
      	par = curr
      	lastR = false
     		curr = curr.left
      } else {
      	curr = null
      }
    }
    
    if(value === curr.value) {
    	if(curr.left && curr.right) {
      	par.left = curr.left
      } else if(!curr.left){
      	lastR ? par.right = curr.right : par.left = curr.right
      } else {
      	lastR ? par.left = curr.left : par.left = curr.left
      }
      break
    }
	}
}
function isLeaf(node) {
	return !node.left && !node.right
}
function Node (value) {
	this.value = value
  this.left = null
  this.right = null
}
function BinarySearchTree () {
	this.root = null
}
BinarySearchTree.prototype.insert = function (value) {
	if(this.root === null) {
  	this.root = new Node(value)
    return
  }
  let curr = this.root
  while(curr) {
  	if(value <= curr.value){
    	if(!curr.left){
      	curr.left = new Node(value)
        break
      } else {
      	curr = curr.left
      }
    } else {
    	if(value > curr.value){
      	if(!curr.right) {
        	curr.right = new Node(value)
          break
        } else {
        	curr = curr.right
        }
      }
    }
  }
}
let bst = new BinarySearchTree()
bst.insert(3)
bst.insert(6)
bst.insert(5)
bst.insert(1)
bst.insert(7)
bst.insert(0)
bst.delete(3)

console.log(bst)
