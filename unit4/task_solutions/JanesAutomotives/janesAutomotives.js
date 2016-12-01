function calculateTotal() {
	var isOil = document.getElementById("oil").checked;
	var isRadiator = document.getElementById("radiator").checked;
	var isTrans = document.getElementById("trans").checked;
	var isInspection = document.getElementById("inspection").checked;
	var isMuffler = document.getElementById("muffler").checked;
	var isTire = document.getElementById("tire").checked;
	var totalText = document.getElementById("total");
	var total = 0.0;

	if (isOil) {
		total += 30.00;
	}
	if (isRadiator) {
		total += 40.00;
	}
	if (isTrans) {
		total += 100.00;
	}
	if (isInspection) {
		total += 35.00;
	}
	if (isMuffler) {
		total += 200.00;
	}
	if (isTire) {
		total += 20.00;
	}

	totalText.innerHTML = "Your total is &pound;" + total.toFixed(2);

}