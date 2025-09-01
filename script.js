const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
// const priceElements = document.querySelectorAll(".price");
  let total = 0;

  // Calculate total
  priceElements.forEach(priceEl => {
    total += parseFloat(priceEl.textContent);
  });

  // Get the table
  const table = document.querySelector("table");

  // If total row already exists, remove it (to avoid duplicates)
  const oldTotalRow = document.querySelector(".total-row");
  if (oldTotalRow) {
    oldTotalRow.remove();
  }

  // Create a new row for total
  const totalRow = document.createElement("tr");
  totalRow.classList.add("total-row");

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = `Total: Rs ${total}`;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

