module.exports = {
	succeed,
	fail,
	repair,
	get,
};

function succeed(item) {
	const enhancement = item.enhancement;

	if (enhancement < 20 && enhancement > -1) {
		return { ...item, enhancement: enhancement + 1 };
	} else if (enhancement === 20) {
		return { ...item };
	} else {
		return 'Enhancement level cannot exceed 20';
	}
}

function fail(item) {
	let durability = item.durability;
	let enhancement = item.enhancement;

	if (enhancement < 15) {
		durability -= 5;
	} else {
		durability -= 10;
	}

	if (enhancement > 16) {
		enhancement -= 1;
	}
	return { ...item, enhancement: enhancement, durability: durability };
	// return { ...item, enhancement, durability };
}

function repair(item) {
	const durability = item.durability;

	if (durability < 100) {
		return { ...item, durability: 100 };
	} else {
		return { ...item };
	}
}

function get(item) {
	return { ...item };
}
