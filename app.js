// Variable declarations 
const binaryValue = document.getElementById("binary");
const submitBtn = document.querySelector(".btn");
const result = document.querySelector(".result");

submitBtn.addEventListener("click", convertBinaryToDecimal);

function convertBinaryToDecimal(e) {
  e.preventDefault();
  result.innerText = `Decimal Number : ${parseInt(binaryValue.value, 2)}`;
}
