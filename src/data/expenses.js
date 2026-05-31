const expenses = [];
function addExpense() {
  function addExpense(expense) {
    if (typeof expense.amount !== "number" || expense.amount < 1) {
      throw new Error("Amount must be positive");
    }
    if (typeof expense.title !== "string" || expense.title.length > 5)
      throw new Error(
        "Title must be string and the length of the title not more than 5",
      );
    if (typeof expense.id !== "number")
      throw new Error("The expenses Id must be number");
  }
  if (typeof paidByParticipantId !== "number") {
    throw new Error("paidByParticipantId must be a number");
  }
  if (!Array.isArray(participantIds) || participantIds.length === 0) {
    throw new Error("participantIds must be a non-empty array");
  }
  if (
    !expense.id ||
    !expense.amount ||
    !expense.title ||
    !expense.paidByParticipantId ||
    !expense.participantIds
  ) {
    throw new Error(
      "Expense must have id, amount, title, paidByParticipantId, participantIds",
    );
  }
  expenses.push(expense);
  return expense;
}
module.exports = expenses;
