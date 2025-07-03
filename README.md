# JavaScript Algorithms Collection

A comprehensive collection of algorithm implementations in JavaScript, covering various data structures and problem-solving techniques.

## Contents

### Sorting Algorithms
- **quicksort.js** - Quick sort implementation with pivot-based partitioning
- **mergeSort** - Merge sort algorithm using divide and conquer
- **heapsort.js** - Heap sort implementation
- **newHeapsort.js** - Alternative heap sort implementation

### Tree Data Structures
- **tree.js** - Binary Search Tree implementation with various operations
- **bst.js** - Additional Binary Search Tree operations
- **isTreeBalanced** - Algorithm to check if a binary tree is height-balanced
- **heightbalancedwithBFS** - Height-balanced tree operations using BFS

### Dynamic Programming
- **DPPractice** - Collection of dynamic programming problems including:
  - Rod cutting problem
  - Subset sum problem
  - Path counting algorithms

### Graph Algorithms
- **DFSgraph** - Depth-First Search implementation for graphs

### Array and String Problems
- **sumInASortedArray.js** - Find pairs that sum to a target in sorted arrays
- **palindromicdecomp.js** - Palindromic decomposition algorithms
- **Stringpermutations.js** - Generate all permutations of a string
- **kthposition.js** - Find the kth element in arrays

### Subset and Combination Problems
- **subssets** - Generate all subsets of a set
- **uniqSubsets** - Generate unique subsets
- **nQueens** - Classic N-Queens problem solution

### Miscellaneous
- **promise.all.js** - Custom implementation of Promise.all
- **countpaths** - Path counting algorithms

## How to Use

Each file contains a self-contained implementation that can be run with Node.js:

```bash
node quicksort.js
node tree.js
node DPPractice
```

## Features

- **Educational Focus**: Clear, readable implementations for learning
- **Variety**: Covers fundamental algorithms across multiple domains
- **Standalone Files**: Each algorithm is self-contained for easy testing
- **Console Output**: Most implementations include example usage with console output

## Getting Started

1. Clone or download this repository
2. Ensure you have Node.js installed
3. Run any algorithm file directly: `node <filename>.js`
4. Modify the test cases in each file to experiment with different inputs

## Contributing

Feel free to add new algorithms or improve existing implementations. Each file should:
- Be self-contained
- Include example usage
- Have clear variable names and logic flow
- Include console output for verification

## Algorithm Categories

### Time Complexities
- **Sorting**: O(n log n) average case for quicksort and mergesort
- **Tree Operations**: O(log n) for balanced BST operations
- **Dynamic Programming**: Varies by problem, typically O(n²) or better
- **Graph Traversal**: O(V + E) for DFS

This collection serves as a practical reference for common algorithms and data structures implemented in JavaScript.