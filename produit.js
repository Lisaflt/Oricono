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

fetch("http://localhost:3000/api/teddies/" + id)
	.then(function (response) {
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

			//Create and append select list
			var selectList = document.createElement("select");
			selectList.className = "mySelect";
			article.appendChild(selectList);

			//Create and append the options colors
			for (var i = 0; i < ourson.colors.length; i++) {
				var option = document.createElement("option");
				option.value = ourson.colors[i];
				option.text = ourson.colors[i];
				option.className = "colorValue";
				selectList.appendChild(option);
			}

			// création d'un paragraphe pour spécifier la quantité
			let quantite = document.createElement("p");
			quantite.textContent = "Choix de la quantité : ";
			append(article, quantite);
			append(container, article);

			// create and append the options quantity
			let toto = document.querySelector(".toto");
			append(article, toto);

			// ajout d'une classe pour sélectionner la couleur
			let colorChoice = "";
			let mySelect = document.querySelector(".mySelect");
			mySelect.addEventListener("change", (event) => {
				colorChoice = mySelect.value;
				console.log(colorChoice);
			});

			// ajout d'une classe pour sélectionner la quantité
			let qtChoice = "";
			let mySelect2 = document.querySelector(".toto");
			mySelect2.addEventListener("change", (event) => {
				qtChoice = mySelect2.value;
				console.log(qtChoice);
			});

			let prix = document.createElement("p");
			prix.className = "prix";
			prix.textContent = "Prix : ";
			append(article, prix);
			append(container, article);

			let price = document.createElement("span");
			price.className = "price";
			let euros = "euros";
			price.textContent = `${ourson.price} ` + "$";
			append(article, price);
			append(container, article);

			let image = document.createElement("img");
			image.className = "image";
			image.src = ourson.imageUrl;
			append(article, image);
			append(container, article);

			const btn = document.createElement("button"); // création du bouton
			btn.textContent = "Ajouter au panier";
			append(article, btn);
			append(container, article);

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
			btn.addEventListener("click", function () {
				add(ourson._id, colorChoice, qtChoice);
			});
		});
	})

	.then(console.log);
