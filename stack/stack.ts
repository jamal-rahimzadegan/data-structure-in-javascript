export default class Stack {
	maxSize: number;
	protected items: any[];

	constructor(maxSize = 10) {
		this.maxSize = maxSize;
		this.items = [];
	}

	push(element) {
		if (this.isFull()) {
			console.log("Stack Overflow!");
			return;
		}

		this.items.push(element);
	}

	peek() {
		return this.items[this.items.length - 1];
	}

	pop() {
		if (this.isEmpty()) return;
		this.items.pop();
	}

	clear() {
		this.items = [];
	}

	print() {
		console.log(this.items);
	}

	isEmpty() {
		return this.items.length === 0;
	}

	isFull() {
		return this.items.length >= this.maxSize;
	}
}
