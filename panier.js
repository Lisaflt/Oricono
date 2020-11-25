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
		colors.textContent = " Couleur : ";
		append(article, colors);
		append(container, article);
	});
});
