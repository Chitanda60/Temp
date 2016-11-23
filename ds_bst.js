function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

function BST() {
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
}

function show() {
	return this.data;
}

function insert(data) {
	var n = new Node(data, null, null);
	if (this.root == null) {
		this.root = n;
	} else {
		var current = this.root;
		var parent;
		while(true) {
			parent = current;
			if (data < current.data) {
				current = current.left;
				if (current == null) {
					parent = n;
					break;
				}
			} else {
				current = current.right
				if (current == null) {
					parent = n;
					break;
				}
			}
		}
	}
}

// 中序遍历
function inOrder(node) {
	if (!(node == null)) {
		inOrder(node.left);
		console.log(node.show());
		inOrder(node.right);
	}
}
// 先序遍历
function preOrder(node) {
	if (!(node == null)) {
		console.log(node.show());
		preOrder(node.left);
		preOrder(node.right);
	}
}
// 后序遍历
function postOrder(node) {
	if (!(node == null)) {
		postOrder(node.left);
		postOrder(node.right);
		console.log(node.show())
	}
}

var nums = new BST();
nums.insert(11);
nums.insert(13);
nums.insert(12);
nums.insert(23);
nums.inOrder(nums.root);