import LinkNode from "./link-node";

export default class SingleLinkedList {
	head: null | SingleLinkedListNode;
	length: number;

	constructor() {
		this.head = null;
		this.length = 0;
	}

	protected validateIndex = (index: number): boolean => !(index < 0 || index >= this.length);

	insertHead(value) {
		this.length++;
		this.head = new LinkNode(value, this.head);
	}

	insertAt(index: number, value) {
		if (index === 0) return this.insertHead(value);

		const prev = this.getByIndex(index - 1);
		if (prev === null) return null;

		prev.next = new LinkNode(value, prev.next);
		this.length++;
	}

	insertMultiple(...values) {
		if (!values?.length) return;
		for (let i = values.length - 1; i >= 0; i--) this.insertHead(values[i]);
	}

	insertEnd(value) {
		this.length++;
		const newLast = new LinkNode(value);

		if (!this.head) this.head = newLast;
		else {
			let last = this.head;
			while (last.next) last = last.next;
			last.next = newLast;
		}
	}

	getByIndex(index: number): SingleLinkedListNode {
		if (!this.validateIndex(index)) return null;

		let currentItem = this.head;
		for (let i = 0; i < index; i++) currentItem = currentItem.next;

		return currentItem;
	}

	getFirstItem(): SingleLinkedListNode {
		return this.getByIndex(0);
	}

	getLastItem(): SingleLinkedListNode {
		return this.getByIndex(this.length - 1);
	}

	removeLast() {
		return this.removeByIndex(this.length - 1);
	}

	removeHead() {
		this.head = this.head.next;
		this.length--;
	}

	removeByIndex(index: number) {
		if (index === 0) return this.removeHead();

		const prev = this.getByIndex(index - 1);
		if (prev === null) return null;

		prev.next = prev.next.next;
		this.length--;
	}

	clearList() {
		this.head = null;
		this.length = 0;
	}

	printList() {
		let current = this.head;
		let output = "";

		while (current) {
			output = `${output}${current.value} -> `;
			current = current.next;
		}

		console.log(output + "null");
	}
}
