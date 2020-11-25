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

			let colors = document.createElement("p");
			colors.className = "colors";
			colors.textContent = `${ourson.colors}`;
			append(article, colors);
			append(container, article);
		});
	})
	.then(console.log);

//Create and append select list
var selectList = document.createElement("select");
selectList.id = "mySelect";
myParent.appendChild(selectList);

//Create and append the options
for (var i = 0; i < array.length; i++) {
	var option = document.createElement("option");
	option.value = array[i];
	option.text = array[i];
	selectList.appendChild(option);
}
