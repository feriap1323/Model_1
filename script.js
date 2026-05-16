// =========================
// HOME PAGE
// =========================

function shopNow() {
  window.location.href = "product.html";
}

function openCategory(categoryName) {
  alert(categoryName + " category opened");

  window.location.href = "productS.html";
}

// =========================
// CART PAGE
// =========================

const prices = [645, 650];

const quantities = [1, 1];

function updateTotal() {

  let total = 0;

  const cartItems =
    document.querySelectorAll(".cart-item");

  const qty =
    document.querySelectorAll(".qty");

  for(let i = 0; i < prices.length; i++) {

    if(cartItems[i].style.display !== "none") {

      total += prices[i] * quantities[i];

      qty[i].innerText = quantities[i];

    }

  }

  document.getElementById("total").innerText = total;

}

function increaseQuantity(index) {

  quantities[index]++;

  updateTotal();

}

function decreaseQuantity(index) {

  const cartItems =
    document.querySelectorAll(".cart-item");

  if(quantities[index] > 1) {

    quantities[index]--;

  }

  else {

    cartItems[index].style.display = "none";

  }

  updateTotal();

}

// =========================
// LOGIN PAGE
// =========================

function loginUser(event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value;

  const password = document.getElementById("loginPassword").value;

  if (email === "" || password === "") {
    alert("Please fill all details");
  } else {
    alert("Login Successful");

    window.location.href = "home.html";
  }
}

// =========================
// REGISTER PAGE
// =========================

function registerUser(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;

  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  const confirmPassword = document.getElementById("confirmPassword").value;

  if (
    name === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("Please fill all fields");
  } else if (password !== confirmPassword) {
    alert("Passwords do not match");
  } else {
    alert("Registration Successful");

    window.location.href = "login.html";
  }
}

// =========================
// PAYMENT PAGE
// =========================

function paymentSuccess(event) {

  event.preventDefault();

  const cardName =
    document.getElementById("cardName").value;

  const cardNumber =
    document.getElementById("cardNumber").value;

  const expiryDate =
    document.getElementById("expiryDate").value;

  const cvv =
    document.getElementById("cvv").value;

  if(
    cardName === "" ||
    cardNumber === "" ||
    expiryDate === "" ||
    cvv === ""
  ) {

    alert("Please fill all payment details");

  } else {

    alert("Payment Successful");

    window.location.href = "order.html";

  }

}

// =========================
// CONTACT PAGE
// =========================

function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;

  const email = document.getElementById("email").value;

  const phone = document.getElementById("phone").value;

  const message = document.getElementById("message").value;

  if (name === "" || email === "" || phone === "" || message === "") {
    alert("Please fill all fields");
  } else {
    alert("Message Sent Successfully");

    document.querySelector(".form2").reset();
  }
}

// =========================
// PROFILE PAGE
// =========================

function editProfile() {
  alert("Profile Edit Opened");
}

function viewOrders() {
  window.location.href = "order.html";
}

// =========================
// PRODUCT DETAILS PAGE
// =========================

let productQty = 1;

function increaseProductQty() {
  productQty++;

  document.getElementById("productQty").innerText = productQty;
}

function decreaseProductQty() {
  if (productQty > 1) {
    productQty--;

    document.getElementById("productQty").innerText = productQty;
  }
}

function addToCart(productName) {
  alert(productName + " added to cart");

  window.location.href = "card.html";
}

function buyNow() {
  window.location.href = "payment.html";
}

// =========================
// ORDER PAGE
// =========================

function placeOrder() {
  alert("Order Placed Successfully");
}

function trackOrder() {
  alert("Your order is being tracked");
}

function trackHistoryOrder() {
  alert("Your order tracking is active");
}

////
function addToCart(productName) {

  alert(productName + " added to cart");

  window.location.href = "card.html";

}
//
function trackHistoryOrder() {

  alert("Your order is on the way!");

}

//
function openCategory(categoryName) {

  alert(categoryName + " category opened");

  window.location.href = "products.html";

}