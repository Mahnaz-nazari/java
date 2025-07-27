// 🔐 Part 1: Login & Access Control
let username = prompt("Enter your username:");
let password = prompt("Enter your password:");

let role = "";
let securityLevel = "";

// چک کردن اعتبار
if ((username === "admin" || username === "user") && password === "1234") {
  role = username;
  securityLevel = (username === "admin") ? "high" : "low";
} else {
  alert("❌ Incorrect credentials! Access denied.");
  throw new Error("Program stopped due to incorrect login.");
}

// ☕ Part 2: Coffee Shop Order Calculator
let name = prompt("Welcome! What is your name?");
let age = parseInt(prompt("What is your age?"));
let coffeeType = prompt("What coffee would you like? (espresso / latte / cappuccino)").toLowerCase();
let quantity = parseInt(prompt("How many cups would you like?"));

let pricePerCup = 0;

// تعیین قیمت بر اساس نوع قهوه
if (coffeeType === "espresso") {
  pricePerCup = 2.5;
} else if (coffeeType === "latte") {
  pricePerCup = 3.5;
} else if (coffeeType === "cappuccino") {
  pricePerCup = 4.0;
} else {
  alert("☕ Invalid coffee type selected.");
  throw new Error("Invalid coffee type.");
}

// محاسبه هزینه
let originalTotal = pricePerCup * quantity;
let discount = (age < 18 || age > 60) ? originalTotal * 0.10 : 0;
let finalTotal = originalTotal - discount;

// 🧾 Part 3: Bill Splitter with Tip
let numPeople = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"));
if (![1, 2, 3].includes(numPeople)) {
  alert("⚠ Invalid number of people.");
  throw new Error("Invalid bill split number.");
}

let tipPercent = parseInt(prompt("What tip percentage? (0, 5, 10, 15)"));
if (![0, 5, 10, 15].includes(tipPercent)) {
  alert("⚠ Invalid tip percentage.");
  throw new Error("Invalid tip.");
}

// محاسبه 
let tipAmount = finalTotal * (tipPercent / 100);
let totalWithTip = finalTotal + tipAmount;
let amountPerPerson = totalWithTip / numPeople;

// ✨ نتیجه
alert(`👋 Hello ${name}!
You ordered ${quantity} ${coffeeType}(s).
Original total: $${originalTotal.toFixed(2)}
Discount: $${discount.toFixed(2)}
Tip: $${tipAmount.toFixed(2)}
Total with Tip: $${totalWithTip.toFixed(2)}
Split between ${numPeople} person(s): $${amountPerPerson.toFixed(2)} each`);