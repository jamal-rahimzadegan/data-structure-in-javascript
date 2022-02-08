import Stack from "./stack";
import checkBracketsEquality from "./usage-example";

describe("Internal Methods for Stack are working", () => {
	const stack = new Stack(10);

	beforeEach(() => stack.clear());

	test("#push", () => {
		stack.push(1);

		expect(stack.maxSize).toBe(10);
		expect(stack.length).toBe(1);

		Array.from({ length: 9 }).map((item) => stack.push(item));

		expect(stack.length).toBe(10);
		expect(stack.push(11)).toBe(undefined);
		expect(stack.length).toBe(10);
	});

	test("#pop", () => {
		Array.from({ length: 10 }).map((item) => stack.push(item));
		Array.from({ length: 10 }).map(() => stack.pop());

		expect(stack.length).toBe(0);
		expect(stack.pop()).toBe(undefined);
	});

	test("#peek", () => {
		expect(stack.peek).toBe(undefined);

		stack.push(1);
		expect(stack.peek).toBe(1);
	});

	test("#clear", () => {
		stack.push(1);
		stack.clear();

		expect(stack.length).toBe(0);
	});

	test("#isEmpty", () => {
		stack.push(1);
		expect(stack.isEmpty).toBe(false);

		stack.pop();
		expect(stack.isEmpty).toBe(true);
	});

	test("#isFull", () => {
		Array.from({ length: 10 }).map((item) => stack.push(item));
		expect(stack.isFull).toBe(true);

		stack.pop();
		expect(stack.isFull).toBe(false);
	});

	test("#example", () => {
		expect(checkBracketsEquality("{}")).toBeTruthy();
		expect(checkBracketsEquality("{{}}")).toBeTruthy();
		expect(checkBracketsEquality("{{}")).toBeFalsy();
		expect(checkBracketsEquality("{{})")).toBeFalsy();
		expect(checkBracketsEquality("{)")).toBeFalsy();
		expect(checkBracketsEquality("[{)]")).toBeFalsy();
		expect(checkBracketsEquality("{3+2-1/49}")).toBeTruthy();
		expect(checkBracketsEquality("{{3+2-1/49}")).toBeFalsy();
		expect(checkBracketsEquality("")).toBeFalsy();
	});
});
