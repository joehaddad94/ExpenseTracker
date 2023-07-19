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
    calculateTotal()

     //remove expense
     expenseItem.find(".remove").click(function () {
        expenseItem.remove();
        amountItem.remove();
        calculateTotal()
     })

     //edit expense
     expenseItem.find(".edit").click(function () {
        const input = expenseItem.find("input");
        const text = expenseItem.find(".text");
    
        input.val(text.text())
        text.hide(200)
        input.show(200).focus()
    
        input.keyup(function (event) {
          if (event.keyCode === 13) {
            text.text(input.val())
            text.show(200)
            input.hide(200)
          }
        })
      })

      //edit amount
      amountItem.find(".edit").click(function () {
        const input = amountItem.find("input");
        const text = amountItem.find(".text");
    
        input.val(text.text())
        text.hide(200)
        input.show(200).focus()
    
        input.keyup(function (event) {
          if (event.keyCode === 13) {
            text.text(input.val())
            text.show(200)
            input.hide(200)
            calculateTotal()
          }
        })
      })
}

function calculateTotal() {
    let total = 0;
    $(".text").each(function () {
      const amountText = $(this).text();
      const amount = parseFloat(amountText);
      if (!isNaN(amount)) {
        total += amount;
      }
    });
    $("#total").text(total.toFixed(2));
  }

$(document).ready (function () {
    const addBtn = $("#add-button");
    console.log(addBtn);
    addBtn.click(addExpense);
    
}
)