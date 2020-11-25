let lines = [];
if (sessionStorage.getItem("cart")) {
	lines = JSON.parse(sessionsStorage.getItem("cart"));
}

function save() {
	sessionStorage.setItem("cart", JSON.stringify(lines));
}

function add(product, color, quantity) {
	let item = this.lines.find(
		(item) => item.product.id === product.id && item.color === color
	);
	if (typeof item === "undefined") {
		lines.push({
			product,
			color,
			quantity,
		});
	} else {
		item.quantity += quantity;
	}
	save();
}
