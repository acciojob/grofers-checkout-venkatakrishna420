const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
   const priceElements = document.querySelectorAll(".price");
  let total = 0;

  // Calculate total
  priceElements.forEach(priceEl => {
    total += parseFloat(priceEl.textContent);
  });
	return total;
};

getSumBtn.addEventListener("click", getSum);

