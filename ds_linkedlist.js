function Node(element) {
	this.element = element;
	this.next = null;
	// this.prev = null;
}

function LList() {
	this.head = new Node('head');
	this.find = find;
	this.insertAfter = insertAfter;
	this.insertBefore = insertBefore
	this.remove = remove;
	this.display = display;
}

function find(item) {
	var currNode = this.head;
	while(currNode.element != item) {
		currNode = currNode.next();
	}
	return currNode;
}

function insertAfter(element, item) {
	var newNode = new Node(element);
	var curNode = this.find(item);
	newNode.next = curNode.next;
	curNode.next = newNode;
}

