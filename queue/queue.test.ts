import Queue from "./queue";

describe("Internal Methods for Queue are working", () => {
	const queue = new Queue();

	beforeEach(() => {
		queue.clear();
		[1, 2, 3].forEach((num) => queue.enqueue(num));
	});

	test("#enqueue", () => {
		expect(queue.length()).toBe(3);
		expect(queue.isEmpty()).toBeFalsy();
	});

	test("#dequeue", () => {
		queue.dequeue();
		expect(queue.length()).toBe(2);

		queue.clear();
		expect(queue.dequeue()).toBeUndefined();
	});

	test("#peek", () => {
		const peekItem = queue.peek();
		expect(peekItem).toBe(1);
	});

	test("#getItem", () => {
		const getItem = (i) => queue.getByIndex(i);

		expect(getItem(2)).toBe(3);
		expect(getItem(100)).toBeUndefined();
	});

	test("#clear", () => {
		queue.clear();

		expect(queue.length()).toBe(0);
		expect(queue.isEmpty()).toBeTruthy();
	});
});
