const cartItems = document.getElementById("cart-items");

let totalQuantity = 0,
	totalPrice = 0;

for (const [key, value] of Object.entries(localStorage)) {
	const parsedObj = JSON.parse(value);
	const tr = document.createElement("tr");

	totalQuantity += Number(parsedObj["quantity"]);
	totalPrice += Number(parsedObj["price"]);

	for (const [key, value] of Object.entries(parsedObj)) {
		const td = document.createElement("td");
		td.textContent = value;

		tr.appendChild(td);
		cartItems.appendChild(tr);
	}
}

const rowValues = ["Total:", totalPrice, totalQuantity];

const tr = document.createElement("tr");

rowValues.forEach((value) => {
	const td = document.createElement("td");
	td.textContent = value;
	tr.appendChild(td);
});

cartItems.appendChild(tr);
