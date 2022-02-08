export default class Stack {
	protected items: any[];
	maxSize: number;

	constructor(maxSize = 10) {
		this.maxSize = maxSize;
		this.items = [];
	}

	push(newItem) {
		if (this.isFull) {
			console.log("Stack Overflow!");
			return;
		}

		this.items.push(newItem);
	}

	get peek() {
		if (this.isEmpty) return;
		return this.items[this.items.length - 1];
	}

	pop() {
		if (this.isEmpty) return;
		this.items.pop();
	}

	clear() {
		this.items = [];
	}

	print() {
		console.log(this.items);
	}

	get length(): number {
		return this.items.length;
	}

	get isEmpty(): boolean {
		return this.items.length === 0;
	}

	get isFull(): boolean {
		return this.items.length === this.maxSize;
	}
}
