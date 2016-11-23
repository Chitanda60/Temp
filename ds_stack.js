function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
}

function push(element) {
	// this.dataStore.push(element);this.top++;
	this.dataStore[this.top++] = element;
}

function pop() {
	// this.dataStore.pop();this.top--;
	return this.dataStore[--this.top];
}

function peek() {
	return this.dataStore[this.top-1];
}

function length() {
	return this.top;
}

function clear() {
	this.dataStore = [];
	this.top = 0;
}