function createNode(element) {
	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}

const id = getId();

function getId() {
	const param = window.location.search;
	const id = param.replace("?id=", "");
	return id;
}

fetch("http://localhost:3000/api/teddies/" + id).then(function (response) {
	return response.json().then(function (ourson) {
		let container = document.getElementById("oursons");
		let article = createNode("article");

		let para = document.createElement("h2");
		para.className = "name";
		para.textContent = `${ourson.name}`;
		append(article, para);
		append(container, article);

		let description = document.createElement("p");
		description.className = "description";
		description.textContent = `${ourson.description}`;
		append(article, description);
		append(container, article);

		let colors = document.createElement("p");
		colors.className = "colors";
		colors.textContent = "Choix de la couleur : ";
		append(article, colors);
		append(container, article);
	});
});

/*
let lines = [];
if (sessionStorage.getItem("cart")) {
	lines = JSON.parse(sessionStorage.getItem("cart"));
}

function save() {
	sessionStorage.setItem("cart", JSON.stringify(lines));
}

function add(product, color, quantity) {
	let item = this.lines.find(
		(item) => item.product.id === product.id && item.color
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

*/
