function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const valueInputText = inputField.value;
  const value = parseFloat(valueInputText);
  inputField.value = "";
  return value;
}
function getInnerTextValue(fieldId) {
  const fieldTag = document.getElementById(fieldId);
  const fieldValueText = fieldTag.innerText;
  const value = parseFloat(fieldValueText);
  return value;
}
function updateTotal(fieldId, amount) {
  const totalTag = document.getElementById(fieldId);
  const previousTotalText = totalTag.innerText;
  const previousTotal = parseFloat(previousTotalText);
  const newTotal = previousTotal + amount;
  totalTag.innerText = newTotal;
}
function updateBalance(amount, isAdding) {
  const balanceTag = document.getElementById("balance-total");
  const previousBalanceText = balanceTag.innerText;
  const previousBalance = parseFloat(previousBalanceText);
  let newBalance;
  if (isAdding == true) {
    newBalance = previousBalance + amount;
  } else {
    newBalance = previousBalance - amount;
  }
  balanceTag.innerText = newBalance;
}
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const amount = getInputValue("deposit-input");
    if (amount > 0) {
      updateTotal("deposite-total", amount);
      updateBalance(amount, true);
    }
  });
// handle withdraw
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const amount = getInputValue("withdraw-input");
    const balance = getInnerTextValue("balance-total");

    if (amount > 0 && amount <= balance) {
      updateTotal("withdraw-total", amount);
      updateBalance(amount, false);
    }
  });
