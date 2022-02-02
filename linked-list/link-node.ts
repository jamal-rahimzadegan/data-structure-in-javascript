export default class LinkNode {
	value: null | ListNode;
	next: null | ListNode;

	constructor(value = null, next = null) {
		this.value = value;
		this.next = next;
	}
}
