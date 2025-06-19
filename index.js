var text = document.getElementById("text_details");
var amount = document.getElementById("amount_details");
var history_div = document.getElementById("historybox");
var income = document.getElementById("income");
var expense = document.getElementById("expense");
var balance = document.getElementById('balance');
document.getElementById("submit").addEventListener("click", function () {
  if (text.value == "" || amount.value == "") {
      alert("Enter appropriate values");
  }
  else if (Number(amount.value) > 0) {
      income.innerText = formatNumberWithCommas(Number(removeCommasFromNumber(income.innerText)) + Number(amount.value));
      balance.innerText = formatNumberWithCommas(Number(removeCommasFromNumber(balance.innerText)) + Number(amount.value));
      history_div.innerHTML += `
          <p>${text.value} </p>
          <p>${formatNumberWithCommas(amount.value)}</p>
          `; 
      text.value = "";
      amount.value = "";
  }
  else {
      expense.innerText = formatNumberWithCommas(Number(removeCommasFromNumber(expense.innerText)) + Number(amount.value));
      balance.innerText = formatNumberWithCommas(Number(removeCommasFromNumber(balance.innerText)) - Math.abs(Number(amount.value)));
      text.value = "";
      amount.value = "";
  }
});
function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function removeCommasFromNumber(str) {
  return parseInt(str.replace(/,/g, ""));
}