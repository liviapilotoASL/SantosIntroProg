var km = parseInt(prompt("Enter a distance in km: "));
alert(km + " km is " + kilometers2miles(km) + " miles.");

function kilometers2miles(kilometers) {
	var miles = kilometers * 0.6214; //converting formula
	miles = miles.toFixed(2); //cutting the decimal places to just 2
	return miles;
}