const bill = document.querySelector("#amount");
const tip = document.querySelector('#percentage');
const cal = document.getElementById("calc");
const totalSpan = document.getElementById("total");

function calculateTotal(){
  const billValue = bill.value;
  const tipValue = tip.value;
  const total = billValue * (1 + tipValue/100);
  totalSpan.innerText = total.toFixed(2);
}

cal.addEventListener("click",calculateTotal);


