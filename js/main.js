// Setting money, income, and income per second at starting points
var money = 1;
var income = 0;

// Making the variables above appear as text on screen 
document.getElementById("moneyTotal").innerHTML = money;
document.getElementById("income").innerHTML = "Income Per Second: $" + income;


// Function that will add 1 to money total per second
window.setInterval(
function () {
document.getElementById("moneyTotal").innerHTML = money = (money + 1);
}, 1000);

// This next feature makes it so the button upgrade works, adds money + increment, updates money in HTML
function upgrade() {
  document.getElementById("moneyTotal").innerHTML = money = (money + 1);
};
