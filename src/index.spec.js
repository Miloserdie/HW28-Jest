import {sum} from './index'
import {sumSpread} from './index'
import {minus} from './index'
import {multiply} from './index'
import {divide} from './index'
import {pow} from './index'
import {isBigger} from './index'
import {isSmaller} from './index'
import {getUserInfo} from './index'

describe('sum', () => {
	test('should return 10 with args: 5 and 5', () => {
		expect(sum(5, 5)).toBe(10);
	});
	test('should return "Hi5" with args: "Hi" and 5', () => {
		expect(sum('Hi', 5)).toBe('Hi5');
	});
	test('should return 0 with args: -5 and 5', () => {
		expect(sum(-5, 5)).toBe(0);
	});
	test('should return 0.30000000000000004 with args: 0.1 and 0.2', () => {
		expect(sum(0.1, 0.2)).toBe(0.30000000000000004);
	});
});

describe('sumSpread', () => {
	test('should return 10 with args: 1, 4, 5', () => {
		expect(sumSpread(1, 4, 5)).toBe(10);
	});
	test('should return 9 with args: -5, 5, 10, -1', () => {
		expect(sumSpread(-5, 5, 10, -1)).toBe(9);
	});
});

describe('minus', () => {
	test('should return -4 with args: 1 and 5', () => {
		expect(minus(1, 5)).toBe(-4);
	});
	test('should return -4 with args: -5 and -1', () => {
		expect(minus(-5, -1)).toBe(-4);
	});
});

describe('multiply', () => {
	test('should return 10 with args: 2 and 5', () => {
		expect(multiply(2, 5)).toBe(10);
	});
	test('should return 4 with args: 2 and 2', () => {
		expect(multiply(2, 2)).toBe(4);
	});
});

describe('divide', () => {
	test('should return 1 with args: 5 and 5', () => {
		expect(divide(5, 5)).toBe(1);
	});
	test('should return 1.5 with args: 3 and 2', () => {
		expect(divide(3, 2)).toBe(1.5);
	});
});

describe('pow', () => {
	test('should return 3125 with args: 5 and 5', () => {
		expect(pow(5, 5)).toBe(3125);
	});
	test('should return 9 with args: 3 and 2', () => {
		expect(pow(3, 2)).toBe(9);
	});
});

describe('isBigger', () => {
	test('should return false with args: 8 and 8', () => {
		expect(isBigger(8, 8)).toBe(false);
	});
	test('should return true with args: 0 and -1', () => {
		expect(isBigger(0, -1)).toBe(true);
	});
});

describe('isSmaller', () => {
	test('should return false with args: 8 and 8', () => {
		expect(isSmaller(8, 8)).toBe(false);
	});
	test('should return false with args: 0 and -1', () => {
		expect(isSmaller(0, -1)).toBe(false);
	});
});

describe('getUserInfo', () => {
	test('should return correct user', () => {
		expect(getUserInfo()).toEqual(
			{
				fullName: 'Vick Jone',
				age: 30,
				id: '123',
			}
		);
	});
	test('should return true when checked does the fullName property include the name Vick', () => {
		expect(getUserInfo().fullName.includes('Vick')).toBe(true);
	});
});