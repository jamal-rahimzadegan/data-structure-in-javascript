import Stack from "../stack";

describe("Internal Methods for Stack are working", () => {
	const stack = new Stack(10);

	beforeEach(() => stack.clear());

	test("#push", () => {
		stack.push(1);

		expect(stack.maxSize).toBe(10);
		expect(stack.getLength()).toBe(1);

		Array.from({ length: 9 }).map((item) => stack.push(item));

		expect(stack.getLength()).toBe(10);
		expect(stack.push(11)).toBe(undefined);
	});

	test("#pop", () => {
		Array.from({ length: 10 }).map((item) => stack.push(item));
		Array.from({ length: 10 }).map(() => stack.pop());

		expect(stack.getLength()).toBe(0);
		expect(stack.pop()).toBe(undefined);
	});

	test("#peek", () => {
		expect(stack.peek()).toBe(undefined);

		stack.push(1);
		expect(stack.peek()).toBe(1);
	});

	test("#clear", () => {
		stack.push(1);
		stack.clear();

		expect(stack.getLength()).toBe(0);
	});

	test("#isEmpty", () => {
		stack.push(1);
		expect(stack.isEmpty()).toBe(false);

		stack.pop();
		expect(stack.isEmpty()).toBe(true);
	});

	test("#isFull", () => {
		Array.from({ length: 10 }).map((item) => stack.push(item));
		expect(stack.isFull()).toBe(true);

		stack.pop();
		expect(stack.isFull()).toBe(false);
	});
});
