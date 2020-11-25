function createNode(element) {
	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}

fetch("http://localhost:3000/api/teddies")
	.then((resp) => resp.json())
	.then(function (data) {
		data.forEach(function (ourson) {
			let container = document.getElementById("oursons");
			let article = createNode("article");

			let para = document.createElement("h2");
			para.className = "name";
			para.textContent = `${ourson.name}`;
			append(article, para);
			append(container, article);

			let description = document.createElement("p");
			description.className = "lorem";
			description.textContent = `${ourson.description}`;
			append(article, description);
			append(container, article);
			/*
			let colors = document.createElement("p");
			colors.className = "colors";
			colors.textContent = `${ourson.colors}`;
			append(article, colors);
			append(container, article);

			let price = document.createElement("span");
			price.className = "price";
			let euros = "euros";
			price.textContent = `${ourson.price} ` + "$";
			append(article, price);
			append(container, article);
*/
			let image = document.createElement("img");
			image.className = "image";
			image.src = ourson.imageUrl;
			append(article, image);
			append(container, article);

			const btn = document.createElement("button"); // création du bouton
			btn.textContent = "plus d'informations...";
			append(article, btn);
			append(container, article);
			btn.addEventListener("click", function () {
				location = "produit.html?id=" + ourson._id;
			});
		});
	});
