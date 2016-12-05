var nameElement = document.getElementById("name");
var address1Element = document.getElementById("address1");
var address2Element = document.getElementById("address2");

function showInfo() {
	nameElement.innerHTML = "Livia Santos";
	address1Element.innerHTML = "800 Belsize Ln";
	address2Element.innerHTML = "London, UK";
}

function quit() {
	nameElement.innerHTML = "";
	address1Element.innerHTML = "";
	address2Element.innerHTML = "";
}