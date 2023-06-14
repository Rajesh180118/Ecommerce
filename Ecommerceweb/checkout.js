

  






// Get the necessary elements
const caseMinusBtn = document.getElementById('case-minus');
const casePlusBtn = document.getElementById('case-plus');
const caseNumberInput = document.getElementById('case-number');
const caseTotalElement = document.getElementById('case-total');
const subTotalElement = document.getElementById('sub-total');
const totalPriceElement = document.getElementById('total-price');
const removeIcon = document.querySelector('.fa-times-circle');

// Set the initial price and quantity values
let price = 2999;
let quantity = 1;

// Function to update the price, subtotal, and cart total
function updateCart() {
  // Calculate the new values
  const newPrice = price * quantity;
  const newSubTotal = newPrice;
  const newTotalPrice = newPrice;

  // Update the elements with the new values
  caseTotalElement.textContent = 'Rs ' + newPrice;
  subTotalElement.textContent = newSubTotal;
  totalPriceElement.textContent = newTotalPrice;
}

// Event listener for the minus button
caseMinusBtn.addEventListener('click', function () {
  if (quantity > 1) {
    quantity--;
    caseNumberInput.value = quantity;
    updateCart();
  }
});

// Event listener for the plus button
casePlusBtn.addEventListener('click', function () {
  quantity++;
  caseNumberInput.value = quantity;
  updateCart();
});

// Event listener for the number input
caseNumberInput.addEventListener('change', function () {
  quantity = parseInt(caseNumberInput.value) || 1;
  caseNumberInput.value = quantity;
  updateCart();
});

// Event listener for the remove icon
removeIcon.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the default link behavior
  const productRow = this.closest('tr'); // Find the closest <tr> element

  // Remove the product row from the table
  productRow.remove();

  updateCart(); // Update the cart after removing the product
});








// JavaScript code to add the product to the checkout page

// Get the product details from the product details page
var productTitle = document.querySelector(".product-title").textContent;
var productPrice = document.querySelector(".new-price span").textContent;

// Create a new row for the product in the checkout table
var tableBody = document.querySelector("#cart tbody");
var newRow = document.createElement("tr");

// Create cells for each column in the table
var removeCell = document.createElement("td");
removeCell.innerHTML = '<a href="#"><i class="far fa-times-circle"></i></a>';

var imageCell = document.createElement("td");
var productImage = document.createElement("img");
productImage.src = "https://cdn.shopify.com/s/files/1/0997/6284/products/Side01_480x.png?v=1672316134";
imageCell.appendChild(productImage);

var titleCell = document.createElement("td");
titleCell.textContent = productTitle;

var priceCell = document.createElement("td");
priceCell.textContent = "Rs " + productPrice;

var quantityCell = document.createElement("td");
var quantityDiv = document.createElement("div");
quantityDiv.className = "quantity";
quantityDiv.innerHTML = `
  <button class="case-minus">-</button>
  <input type="number" value="1" class="case-number">
  <button class="case-plus">+</button>
`;
quantityCell.appendChild(quantityDiv);

var subtotalCell = document.createElement("td");
subtotalCell.id = "case-total";
subtotalCell.textContent = "Rs " + productPrice;

// Append cells to the new row
newRow.appendChild(removeCell);
newRow.appendChild(imageCell);
newRow.appendChild(titleCell);
newRow.appendChild(priceCell);
newRow.appendChild(quantityCell);
newRow.appendChild(subtotalCell);

// Append the new row to the table body
tableBody.appendChild(newRow);

// Update the total price and subtotal in the checkout page
updateTotalPrice(parseInt(productPrice));

// Function to update the total price in the checkout page
function updateTotalPrice(productPrice) {
  var subTotalElement = document.getElementById("sub-total");
  var totalElement = document.getElementById("total-price");

  // Get the current sub total and total price
  var currentSubTotal = parseInt(subTotalElement.textContent);
  var currentTotal = parseInt(totalElement.textContent);

  // Calculate the new sub total and total price
  var newSubTotal = currentSubTotal + productPrice;
  var newTotal = currentTotal + productPrice;

  // Update the sub total and total price in the HTML
  subTotalElement.textContent = newSubTotal;
  totalElement.textContent = newTotal;
}
