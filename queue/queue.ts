export default class Queue {
	protected items: unknown[];

	constructor() {
		this.items = [];
	}

	enqueue(e) {
		this.items.push(e);
	}

	dequeue() {
		return this.items.shift();
	}

	peek(): unknown | undefined {
		return this.getByIndex(0);
	}

	getByIndex(index: number): unknown | undefined {
		return this.items?.[index] || undefined;
	}

	isEmpty(): boolean {
		return this.items.length == 0;
	}

	length(): number {
		return this.items.length;
	}

	clear() {
		this.items = [];
	}

	print() {
		console.log(this.items);
	}
}
