const id = getId();

function getId() {
	const param = window.location.search;
	const id = param.replace("?id=", "");
	return id;

	function createNode(element) {
		return document.createElement(element);
	}

	function append(parent, el) {
		return parent.appendChild(el);
	}
}
fetch("http://localhost:3000/api/teddies/" + id)
	.then((resp) => resp.json())
	.then(function (data) {
		let container = document.getElementById("oursons1");
		data.id(function (ourson) {
			let article = createNode("article"),
				img = createNode("img"),
				h1 = createNode("h1"),
				p = createNode("p"),
				span = createNode("span");
			img.src = ourson.imageUrl;
			h1.innerHTML = `${ourson.name}`;
			p.innerHTML = `${ourson.description} `;
			span.innerHTML = `${ourson.price} `;

			const btn = document.createElement("button"); // création du bouton
			btn.textContent = "plus d'informations...";

			append(article, img);
			append(article, h1);
			append(article, p);
			append(article, span);
			append(article, btn);
			append(container, article);
		});
	})
	.catch(function (error) {
		console.log(error);
	});
