export default class DoubleLinkedList {
	head: LinkedListNode | null;
	tail: LinkedListNode | null;
	length: number;

	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	protected validateIndex = (index: number): boolean => !(index < 0 || index >= this.length);

	protected createNode(value) {
		return {
			value: value,
			next: null,
			previous: null,
		};
	}

	insertHead(value) {
		this.length++;
		let newNode = this.createNode(value);

		if (this.head) {
			this.head.previous = newNode;
			newNode.next = this.head;
			this.head = newNode;

			return newNode;
		}

		this.head = this.tail = newNode;

		return newNode;
	}

	insertAt(index: number, value) {
		if (index === 0) return this.insertHead(value);

		if (!this.validateIndex(index)) return "wrong index";

		this.length++;
		let currentNode = this.head;
		for (let i = 0; i < index; i++) currentNode = currentNode.next;
		const previousNode = currentNode.previous;
		const newNode = this.createNode(value);
		newNode.next = currentNode;
		newNode.previous = previousNode;
		previousNode.next = newNode;
		currentNode.previous = newNode;

		return newNode;
	}

	insertMultiple(...values) {
		if (!values?.length) return;
		for (let i = values.length - 1; i >= 0; i--) this.insertHead(values[i]);
	}

	insertEnd(value) {
		this.length++;
		let newNode = this.createNode(value);

		if (!this.tail) this.head = this.tail = newNode;
		else {
			this.tail.next = newNode;
			newNode.previous = this.tail;
			this.tail = newNode;
		}

		return newNode;
	}

	getByIndex(index: number): LinkedListNode {
		if (!this.validateIndex(index)) return null;

		let currentItem = this.head;
		for (let i = 0; i < index; i++) currentItem = currentItem.next;

		return currentItem;
	}

	getFirstItem(): LinkedListNode {
		return this.getByIndex(0);
	}

	getLastItem(): LinkedListNode {
		return this.getByIndex(this.length - 1);
	}

	removeLast() {
		if (this.tail) {
			this.length--;

			const removedTail = this.tail;

			this.tail = this.tail.previous;
			if (this.tail) this.tail.next = null;
			else this.head = null;

			return removedTail;
		}

		return null;
	}

	removeHead() {
		if (this.head) {
			this.length--;
			const removedHead = this.head;
			this.head = this.head.next;

			if (this.head) this.head.previous = null;
			else this.tail = null;

			return removedHead;
		}

		return null;
	}

	removeByIndex(index: number) {
		if (!this.validateIndex(index)) return "wrong index";

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

	clearList() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	printElements() {
		let current = this.head;
		let output = "";

		while (current) {
			output += "<-" + current.value + "-> ";
			current = current.next;
		}

		console.log(output + "null");
	}
}
