import DoubleLinkedList from "../double-linked-list";

describe("Internal Methods for inserting are working", () => {
	test(" #insertHead", () => {
		const list = new DoubleLinkedList();
		list.insertHead("head");
		list.insertEnd(5);

		expect(list.length).toBe(2);
		expect(list.head.value).toBe("head");
	});

	test(" #insertAt", () => {
		const list = new DoubleLinkedList();
		list.insertHead("head");
		list.insertEnd("tail");
		list.insertAt(1, "middle");

		expect(list.length).toBe(3);
		expect(list.head.value).toBe("head");
		expect(list.head.next.value).toBe("middle");
		expect(list.tail.value).toBe("tail");
		expect(list.insertAt(-1, "wrong index")).toBe("wrong index");
		expect(list.insertAt(50, "wrong index")).toBe("wrong index");
	});

	test(" #insertMulitple", () => {
		const list = new DoubleLinkedList();
		list.insertMultiple();
		list.insertMultiple(1, 2, 3, 4);

		expect(list.length).toBe(4);
		expect(list.getLastItem().value).toBe(4);
	});

	test(" #insertEnd", () => {
		const list = new DoubleLinkedList();
		list.insertEnd(1);
		list.insertEnd(2);
		list.insertEnd(3);

		expect(list.length).toBe(3);
		expect(list.head.previous).toBeNull();
		expect(list.head.next.value).toBe(2);
		expect(list.tail.previous.value).toBe(2);
		expect(list.tail.next).toBeNull();
	});
});

describe("Internal Methods for getting are working", () => {
	test(" #getFirstItem", () => {
		const list = new DoubleLinkedList();
		list.insertHead("head");
		list.insertAt(1, "first");

		expect(list.getFirstItem().value).toBe("head");
	});

	test(" #getByIndex", () => {
		const list = new DoubleLinkedList();
		list.insertHead("old head");
		list.insertAt(0, "head");

		expect(list.getByIndex(15)).toBeNull();
		expect(list.getByIndex(0).value).toBe("head");
	});

	test(" #getLastItem", () => {
		const list = new DoubleLinkedList();
		list.insertHead("last");
		list.insertAt(0, "first");

		expect(list.getLastItem().value).toBe("last");
	});
});

describe("Internal Methods for removing are working", () => {
	test(" #removeHead", () => {
		const list = new DoubleLinkedList();
		list.insertHead(1);
		list.insertEnd("new Head");
		list.insertEnd(3);
		list.removeHead();

		expect(list.length).toBe(2);
		expect(list.head.value).toBe("new Head");
	});

	test(" #removeByIndex", () => {
		const list = new DoubleLinkedList();
		list.insertEnd(1);
		list.insertEnd(2);
		list.insertEnd(3);

		list.removeByIndex(1);

		expect(list.length).toBe(2);
		expect(list.head.value).toBe(1);
		expect(list.tail.value).toBe(3);
	});

	test(" #removeLast", () => {
		const list = new DoubleLinkedList();
		list.insertEnd(1);
		list.insertEnd(2);
		list.insertEnd(3);
		list.removeLast();

		expect(list.length).toBe(2);
		expect(list.tail.value).toBe(2);
	});

	test(" #clearList", () => {
		const list = new DoubleLinkedList();
		list.insertAt(0, "first");
		list.insertAt(1, "second");
		list.insertAt(2, "third");

		list.clearList();

		expect(list.length).toBe(0);
		expect(list.head).toBeNull();
		expect(list.tail).toBeNull();
	});
});
