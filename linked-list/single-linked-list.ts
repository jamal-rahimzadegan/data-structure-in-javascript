import LinkNode from "./link-node";
import ListNode from "./link-node";

export default class SingleLinkedList {
	head: null | ListNode;
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

	getByIndex(index: number): ListNode {
		if (!this.validateIndex(index)) return null;

		let currentItem = this.head;
		for (let i = 0; i < index; i++) currentItem = currentItem.next;

		return currentItem;
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

	// clear a whole list
	clearList() {
		this.head = null;
		this.length = 0;
	}

	// print all data in list
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
