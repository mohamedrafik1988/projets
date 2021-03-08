var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");  // creation des sélecteurs

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li"); // créer un élément li
	li.appendChild(document.createTextNode(input.value)); //
	ul.appendChild(li); // ajouter li a ul
	input.value = ""; //Remettre à vide l'input


	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);

	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);

	function deleteListItem(){
		li.classList.add("delete")
	}
}


function addListAfterClick(){
	if (inputLength() > 0) { //s'assure que un champ vide ne retourne rien
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { 
		//vérifie que j'ai bien entrée Entrer/Return et revnoie le keycode de entrer qui est égal à 13 comme ça nous pourons insérer un élément avec la touche entrer
		createListElement();
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

