interface LinkedListNode {
	value: any;
	next: any;
	previous: any;
}

type SingleLinkedListNode = Omit<LinkedListNode, "previous">;
