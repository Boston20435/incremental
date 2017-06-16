// Setting money, income, and income per second at starting points
var money = 1;
var income = 0;

// Making the variables above appear as text on screen 
document.getElementById("moneyTotal").innerHTML = money;
document.getElementById("income").innerHTML = "Income Per Second: $" + income;

// Action function that will give you money every time you click action
function action(x) {
	return money+= x;
};

// Function that will add 1 to money total per second
var test = window.setInterval(
	function () {
		document.getElementById("moneyTotal").innerHTML = income = (money + 1);
}, 1000);

console.log(test);

// window.setInterval(
// 	function () {
// 		return income+= 100;
// }, 1000);