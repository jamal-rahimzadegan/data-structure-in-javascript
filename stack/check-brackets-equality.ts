import Stack from "./stack";

// Example of using Stack
function detectEquality() {
	let stack: Stack;
	let splitItems = [];
	const SUPPLEMENTS = {
		"{": { self: 123, pair: 125 },
		"}": { self: 125, pair: 123 },
		"(": { self: 40, pair: 41 },
		")": { self: 41, pair: 40 },
		"[": { self: 91, pair: 93 },
		"]": { self: 93, pair: 91 },
	};

	const checkPairItems = (index) => {
		return SUPPLEMENTS?.[stack.peek]?.pair === splitItems?.[index]?.charCodeAt(0);
	};

	const testItems = () => {
		splitItems.forEach((el, i) => {
			if (checkPairItems(i)) {
				splitItems.splice(i, 1);
				stack.pop();
			}
		});

		while (stack.length && checkPairItems(0)) testItems();
	};

	return (str: string) => {
		if (!str) return false;

		splitItems = str.split("").filter((item) => !!SUPPLEMENTS[item]?.self);
		stack = new Stack(splitItems.length);
		splitItems.forEach((el) => stack.push(el));

		testItems();
		return !splitItems.length;
	};
}

const checkBracketsEquality = detectEquality();
export default checkBracketsEquality;
