const expenses = [];
function addExpense(expense) {
  if (typeof expense.amount !== "number" || expense.amount < 1) {
    throw new Error("Amount must be positive");
  }
  if (typeof expense.title !== "string" || expense.title.length > 10)
    throw new Error(
      "Title must be string and the length of the title not more than 10",
    );
  if (typeof expense.id !== "string")
    throw new Error("The expenses Id must be string");

  if (typeof expense.paidByParticipantId !== "string") {
    throw new Error("paidByParticipantId must be a string");
  }
  if (
    !Array.isArray(expense.participantIds) ||
    expense.participantIds.length === 0
  ) {
    throw new Error("participantIds must be a non-empty array");
  }
  expenses.push(expense);
  return expense;
}
addExpense({
  id: "e1",
  title: "Dinner",
  amount: 120,
  paidByParticipantId: "p1",
  participantIds: ["p1", "p2", "p3"],
});
module.exports = expenses;
