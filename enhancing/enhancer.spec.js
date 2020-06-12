const { succeed, fail, repair } = require('./enhancer.js');

describe('succeed()', () => {
	it('should enhance by 1', () => {
		expect(
			succeed({
				name: 'Name',
				durability: 12,
				enhancement: 10,
			})
		).toEqual({
			name: 'Name',
			durability: 12,
			enhancement: 11,
		});
	});

	it('does not change enhancement level === 20', () => {
		expect(
			succeed({
				name: 'Name',
				durability: 12,
				enhancement: 20,
			})
		).toEqual({
			name: 'Name',
			durability: 12,
			enhancement: 20,
		});
	});

	it('cannot exceed enhancement of 20', () => {
		expect(
			succeed({
				name: 'Name',
				durability: 12,
				enhancement: 21,
			})
		).toEqual('Enhancement level cannot exceed 20');
	});
});

describe('fail()', () => {
	it('decreases durability by 5 if < 15', () => {
		expect(
			fail({
				name: 'Name',
				durability: 12,
				enhancement: 11,
			})
		).toEqual({
			name: 'Name',
			durability: 7,
			enhancement: 11,
		});
	});

	it('decreases durability by 10 if enhancement >= 15', () => {
		expect(
			fail({
				name: 'Name',
				durability: 12,
				enhancement: 15,
			})
		).toEqual({
			name: 'Name',
			durability: 2,
			enhancement: 15,
		});
	});

	it('decreases enhancement by 1 if enhancement > 16', () => {
		expect(
			fail({
				name: 'Name',
				durability: 12,
				enhancement: 20,
			})
		).toEqual({
			name: 'Name',
			durability: 2,
			enhancement: 19,
		});
	});
});

describe('repair()', () => {
	it('durability restored to 100', () => {
		expect(
			repair({
				name: 'Name',
				durability: 12,
				enhancement: 10,
			})
		).toEqual({
			name: 'Name',
			durability: 100,
			enhancement: 10,
		});
	});
});
