function expensesRowElement(expense) {
  return `<td>
    <span class="edit">&#9998;</span>
    <span class="remove">&#128465</span>
    <span class="text">${expense}</span>
    <input type="text" style="display: none;"/>
  </td>`
  
}


function amountRowElement(amount) {
    return `<td>
    <span class="edit">&#9998;</span>
    <span class="remove">&#128465</span>
    <td><span class="text">${amount}</span>
    <input type="text" style="display: none;"/>
  </td>`
}

function addExpense () {
    // console.log('function entered');
    const description = $("#description");
    // console.log(description);
    const amount = $("#amount");
    // console.log(amount);
    const expenseRow = $("#expense-row");
    // console.log(expenseRow);

    if (description.val().trim() === "" || amount.val().trim() === "") return;

    const expenseItem = $(expensesRowElement(description.val()));
    expenseRow.append(expenseItem);
    description.val("");

    const amountItem = $(amountRowElement(amount.val()));
    expenseRow.append(amountItem);
    amount.val("");
}





$(document).ready (function () {
    const addBtn = $("#add-button");
    console.log(addBtn);
    addBtn.click(addExpense);
    
}
)