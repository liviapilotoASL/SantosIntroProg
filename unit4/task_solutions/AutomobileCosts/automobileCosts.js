var total = 0;
for (var i = 0; i < 6; i++) {
	var cat = prompt("What is the loan that you'd like to pay?");
	promptForCosts(cat);
}
alert(total);

function promptForCosts(category) {
	var amount = parseInt(prompt("Enter the amount you pay per month for " + category));
	total = amount+total;
}