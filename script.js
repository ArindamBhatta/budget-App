const totalAmount = document.getElementById("total-amount");
const userAmount = document.getElementById("user-amount");
const checkAmountButton = document.getElementById("check-amount-button");
const totalAmountButton = document.getElementById("total-amount-button");
const ProductTitle = document.getElementById("product-title");
const errorMessage = document.getElementById("budget-error");
const productTitleError = document.getElementById("product-title-error");
const amount = document.getElementById("amount"); //outputContainer
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-amount");
const list = document.getElementById("list");

//Set Budget Part
totalAmountButton.addEventListener("click", () => {
  let tempAmount = totalAmount.value; //total-amount inpuut-Box value
  console.log(tempAmount);
  //empty or negative input
  if (tempAmount === "" || tempAmount <= 0) {
    alert("Value cann't be empty or negative");
  } else {
    amount.innerHTML = tempAmount;
    //calcutate balace
    balanceValue.innerHTML = tempAmount - expenditureValue.innerText;
    totalAmount.value = "";
  }
});
