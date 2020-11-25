var formValid = document.getElementById("bouton_envoi");

var prenom = document.getElementById("prenom");
var missPrenom = document.getElementById("missPrenom");
var prenomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

var nom = document.getElementById("nom");
var missNom = document.getElementById("missNom");
var nomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

var adresse = document.getElementById("adresse");
var missAdresse = document.getElementById("missAdresse");
var adresseValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

var codepostal = document.getElementById("codepostal");
var missCodePostal = document.getElementById("missCodePostal");
var codepostalValid = /^[0-9]+$/;

var ville = document.getElementById("ville");
var missVille = document.getElementById("missVille");
var villeValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

var email = document.getElementById("email");
var missEmail = document.getElementById("missEmail");
var emailValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

var tel = document.getElementById("tel");
var missTel = document.getElementById("missTel");
var telValid = /^(01|02|03|04|05|06|08)[0-9]{8}/;

formValid.addEventListener("click", validation);

function validation(event) {
	//Si le champ est vide
	if (prenom.validity.valueMissing) {
		event.preventDefault();
		missPrenom.textContent = "Prénom manquant";
		missPrenom.style.color = "red";
		//Si le format de données est incorrect
	} else if (prenomValid.test(prenom.value) == false) {
		event.preventDefault();
		missPrenom.textContent = "Format incorrect";
		missPrenom.style.color = "orange";
	}

	// si le champ est vide
	if (nom.validity.valueMissing) {
		event.preventDefault();
		missNom.textContent = "Nom manquant";
		missNom.style.color = "red";
		//Si le format de données est incorrect
	} else if (nomValid.test(nom.value) == false) {
		event.preventDefault();
		missNom.textContent = "Format incorrect";
		missNom.style.color = "orange";
	}
	// si le champ est vide
	if (adresse.validity.valueMissing) {
		event.preventDefault();
		missAdresse.textContent = "Adresse manquante";
		missAdresse.style.color = "red";

		//Si le format de données est incorrect
	} else if (adresseValid.test(adresse.value) == false) {
		event.preventDefault();
		missAdresse.textContent = "Format incorrect";
		missAdresse.style.color = "orange";
	}

	// si le champ code postal est vide
	if (codepostal.validity.valueMissing) {
		event.preventDefault();
		missCodePostal.textContent = "Code postal manquant";
		missCodePostal.style.color = "red";
		//Si le format de données est incorrect
	} else if (codepostalValid.test(codepostal.value) == false) {
		event.preventDefault();
		missCodePostal.textContent = "Format incorrect";
		missCodePostal.style.color = "orange";
	}

	// si le champ VILLE est vide
	if (ville.validity.valueMissing) {
		event.preventDefault();
		missVille.textContent = "Ville manquante";
		missVille.style.color = "red";
		//Si le format de données est incorrect
	} else if (villeValid.test(ville.value) == false) {
		event.preventDefault();
		missVille.textContent = "Format incorrect";
		missVille.style.color = "orange";
	}

	// si le champ téléphone est vide
	if (tel.validity.valueMissing) {
		event.preventDefault();
		missTel.textContent = "Téléphone manquant";
		missTel.style.color = "red";
		//Si le format de données est incorrect
	} else if (telValid.test(tel.value) == false) {
		event.preventDefault();
		missTel.textContent = "Format incorrect";
		missTel.style.color = "orange";
	}

	// si le champ EMAIL est vide
	if (email.validity.valueMissing) {
		event.preventDefault();
		missEmail.textContent = "email manquant";
		missEmail.style.color = "red";
		//Si le format de données est incorrect
	} else if (emailValid.test(email.value) == false) {
		event.preventDefault();
		missEmail.textContent = "Format incorrect";
		missEmail.style.color = "orange";
	}
}
