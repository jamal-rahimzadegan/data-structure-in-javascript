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

	get peek(): unknown | undefined {
		return this.getByIndex(0);
	}

	getByIndex(index: number): unknown | undefined {
		return this.items?.[index] || undefined;
	}

	get isEmpty(): boolean {
		return this.items.length == 0;
	}

	get length(): number {
		return this.items.length;
	}

	clear() {
		this.items = [];
	}

	print() {
		console.log(this.items);
	}
}
