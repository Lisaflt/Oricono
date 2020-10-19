const id = getId();

function getId() {
	const param = window.location.search;
	const id = param.replace("?id=", "");
	return id;
}
fetch("http://localhost:3000/api/teddies/" + id)
	.then(function (response) {
		return response.json();
	})
	.then(console.log);
