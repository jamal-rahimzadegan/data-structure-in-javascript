export default class LinkNode implements LinkedListNode {
	value: null | LinkedListNode;
	next: null | LinkedListNode;
	previous: null | LinkedListNode;

	constructor(value = null, next = null, previous = null) {
		this.value = value;
		this.next = next;
		this.previous = previous;
	}
}
