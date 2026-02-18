// Starting balance
let balance = 6000;

// Select elements
let balanceDisplay = document.getElementById("balance");
let depositInput = document.getElementById("depositInput");
let withdrawInput = document.getElementById("withdrawInput");
let depositBtn = document.getElementById("depositBtn");
let withdrawBtn = document.getElementById("withdrawBtn");
let error = document.getElementById("error");


// Function to show balance
function updateBalance() {
    balanceDisplay.textContent = "₹" + balance;
}


// Function to check input
function checkInput(value) {

    if (value === "") {
        return "Input is empty";
    }

    if (isNaN(value)) {
        return "Only numbers allowed";
    }

    if (Number(value) <= 0) {
        return "Enter positive amount";
    }

    return "valid";
}


// Deposit
depositBtn.addEventListener("click", function () {

    let value = depositInput.value;
    let check = checkInput(value);

    if (check !== "valid") {
        error.textContent = check;
        return;
    }

    balance += Number(value);
    updateBalance();
    depositInput.value = "";
    error.textContent = "";
});


// Withdraw
withdrawBtn.addEventListener("click", function () {

    let value = withdrawInput.value;
    let check = checkInput(value);

    if (check !== "valid") {
        error.textContent = check;
        return;
    }

    if (Number(value) > balance) {
        error.textContent = "Insufficient balance";
        return;
    }

    balance -= Number(value);
    updateBalance();
    withdrawInput.value = "";
    error.textContent = "";
});
