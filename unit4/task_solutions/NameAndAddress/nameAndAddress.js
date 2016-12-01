var nameElement = document.getElementById("name");
var address1Element = document.getElementById("address1");
var address2Element = document.getElementById("address2");

function showInfo() {
	nameElement.innerHTML = "American School in London";
	address1Element.innerHTML = "1 Waverley Place";
	address2Element.innerHTML = "London, UK NW8 0NP";
}

function quit() {
	nameElement.innerHTML = "";
	address1Element.innerHTML = "";
	address2Element.innerHTML = "";
}