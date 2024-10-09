let totalBudget = 0;
function addBudget(expense) {   
     totalBudget += expense;
     console.log (totalBudget);
}

function getExpenseDetails(description, cost){
    const expenseDescription = (description);
    const expenseCost = (cost);
    console.log(`Expense: ${expenseDescription}, cost: ${expenseCost}`);

}
