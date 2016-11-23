function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.empty = enpty;	
	this.toString = toString;
	this.length = length;
}

function enqueue(element) {
	this.dataStore.push(element);
}

function dequeue() {
	return this.dataStore.shift();
}

function length() {
	return this.dataStore.length();
}

function front() {
	return this.dataStore[this.top];
}

function back() {
	return this.dataStore[this.dataStore.length()-1];
}