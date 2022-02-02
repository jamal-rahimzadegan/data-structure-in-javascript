import SingleLinkedList from "../single-linked-list";

describe("Internal Methods for inserting are working", () => {
	test(" #insertHead", () => {
		const linkedList = new SingleLinkedList();
		linkedList.insertHead(1);
		const oldHead = linkedList.head.value;
		linkedList.insertHead(2);

		expect(linkedList.head.value).toBe(2);
		expect(linkedList.length).toBe(2);
		expect(linkedList.head.next.value).toBe(oldHead);
	});

	test(" #insertAt", () => {
		const linkedList = new SingleLinkedList();
		const data = ["first", "second", "third"];

		data.forEach((el, i) => {
			linkedList.insertAt(i, el);
		});

		expect(linkedList.length).toBe(data.length);
		expect(linkedList.head.next.value).toBe(data[1]);
	});

	test(" #insertMulitple", () => {
		const linkedList = new SingleLinkedList();
		linkedList.insertMultiple();
		linkedList.insertMultiple(1, 2, 3, 4);

		linkedList.printList();

		expect(linkedList.length).toBe(4);
		expect(linkedList.getLastItem().value).toBe(4);
	});

	test(" #insertEnd", () => {
		const linkedList = new SingleLinkedList();
		linkedList.insertHead("head");
		linkedList.insertAt(1, "first");
		linkedList.insertAt(2, "second");
		linkedList.insertEnd("last");

		expect(linkedList.length).toBe(4);
		expect(linkedList.getLastItem().value).toBe("last");
	});
});

describe("Internal Methods for getting are working", () => {
	test(" #getByIndex", () => {
		const linkedList = new SingleLinkedList();
		linkedList.insertHead("third");
		linkedList.insertHead("second");
		linkedList.insertHead("first");

		const getItem = (i) => linkedList.getByIndex(i);

		expect(getItem(-1)).toBeNull();
		expect(getItem(linkedList.length + 1)).toBeNull();
		expect(getItem(0).value).toBe("first");
		expect(getItem(1).value).toBe("second");
		expect(getItem(2).value).toBe("third");
	});

	test(" #getFirstItem", () => {
		const linkedList = new SingleLinkedList();
		linkedList.insertHead("head");
		linkedList.insertAt(1, "first");

		expect(linkedList.getFirstItem().value).toBe("head");
	});

	test(" #getLastItem", () => {
		const linkedList = new SingleLinkedList();
		linkedList.insertHead("third");
		linkedList.insertHead("second");
		linkedList.insertHead("first");
		const lastItem = linkedList.getLastItem().value;

		expect(lastItem).toBe("third");
	});
});

describe("Internal Methods for removing are working", () => {
	test(" #removeHead", () => {
		const linkedList = new SingleLinkedList();
		linkedList.insertAt(0, "first");
		linkedList.insertAt(1, "second");
		linkedList.removeHead();

		expect(linkedList.length).toBe(1);
		expect(linkedList.getByIndex(0).value).toBe("second");
	});

	test(" #removeByIndex", () => {
		const linkedList = new SingleLinkedList();
		linkedList.insertAt(0, "first");
		linkedList.insertAt(1, "second");
		linkedList.insertAt(2, "third");
		linkedList.removeByIndex(1);
		linkedList.removeByIndex(-1);

		expect(linkedList.length).toBe(2);
		expect(linkedList.getByIndex(0).next.value).toBe("third");
	});

	test(" #removeLast", () => {
		const linkedList = new SingleLinkedList();
		linkedList.insertAt(0, "first");
		linkedList.insertAt(1, "second");
		linkedList.insertAt(2, "third");
		linkedList.removeLast();

		expect(linkedList.length).toBe(2);
	});

	test(" #clearList", () => {
		const linkedList = new SingleLinkedList();
		linkedList.insertAt(0, "first");
		linkedList.insertAt(1, "second");
		linkedList.insertAt(2, "third");
		linkedList.clearList();

		expect(linkedList.length).toBe(0);
		expect(linkedList.head).toBeNull();
	});
});
