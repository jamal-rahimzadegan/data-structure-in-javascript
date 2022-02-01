export default class LinkedList {
	head: null | ListNode;
	tail: null | ListNode;
	length: number;

	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	protected produceNode(value: unknown): ListNode {
		return {
			value,
			next: null,
			previous: null,
		};
	}

	prepend(value: unknown) {
		this.length++;
		let newNode = this.produceNode(value);

		if (this.head) {
			this.head.previous = newNode;
			newNode.next = this.head;
			this.head = newNode;
			return newNode;
		}

		this.head = this.tail = newNode;
		return newNode;
	}

	insert(value: unknown) {
		this.length++;
		let newNode = this.produceNode(value);

		if (this.tail) {
			// list is not empty
			this.tail.next = newNode;
			newNode.previous = this.tail;
			this.tail = newNode;
			return newNode;
		}

		this.head = this.tail = newNode;
		return newNode;
	}

	insertByIndex(value: unknown, index: number) {
		if (index >= this.length) throw new Error("Insert index out of bounds");

		if (index === 0) return this.prepend(value);

		this.length++;
		let currentNode = this.head;
		for (let i = 0; i < index; i++) currentNode = currentNode.next;

		const previousNode = currentNode.previous;
		const newNode = this.produceNode(value);
		newNode.next = currentNode;
		newNode.previous = previousNode;
		previousNode.next = newNode;
		currentNode.previous = newNode;

		return newNode;
	}

	remove() {
		if (!this.tail) return;

		this.length--;
		const removedTail = this.tail;
		this.tail = this.tail.previous;
		if (this.tail) this.tail.next = null;
		else this.head = null;

		return removedTail;
	}

	removeByIndex(index: number) {
		if (index >= this.length) throw new Error("Remove index out of bounds");

		if (index === 0) return this.removeHead();

		this.length--;
		let currentNode = this.head;
		for (let i = 0; i < index; i++) currentNode = currentNode.next;

		const previousNode = currentNode.previous;
		const nextNode = currentNode.next;
		previousNode.next = nextNode;
		nextNode.previous = previousNode;

		return currentNode;
	}

	removeHead() {
		if (!this.head) return;

		this.length--;
		const removedHead = this.head;
		this.head = this.head.next;

		if (this.head) this.head.previous = null;
		else this.tail = null;

		return removedHead;
	}

	show() {
		let current = this.head;

		while (current) {
			console.info(
				`-- ${current.previous?.value} < ${current.value} > ${current.next?.value} --`
			);
			current = current.next;
		}
	}
}
