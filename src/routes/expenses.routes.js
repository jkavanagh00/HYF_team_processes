const express = require("express");
const router = express.Router();
const expenses = require("../data/expenses");

const validateAddExpense = (request, response, next) => {
  const { title, amount, paidByParticipantId, participantIds } = request.body;
  if (!title || typeof title !== "string") {
    return response
      .status(400)
      .json({ error: "Expense name is required and must be a string" });
  }
  if (typeof amount !== "number" || amount <= 0) {
    return response
      .status(400)
      .json({ error: "Amount is required and must be a positive number" });
  }
  if (!paidByParticipantId || typeof paidByParticipantId !== "number") {
    return response.status(400).json({
      error: "Paid by participant ID is required and must be a number",
    });
  }
  if (
    !participantIds ||
    !Array.isArray(participantIds) ||
    participantIds.length === 0
  ) {
    return response.status(400).json({
      error: "Participant IDs are required and must be a non-empty array",
    });
  }
  next();
};

router.get("/", (req, res) => {
  // TODO: return all expenses
});

router.post("/", (request, response) => {
  const newExpense = {
    id: expenses.length + 1,
    title: request.body.title,
    amount: request.body.amount,
    paidByParticipantId: request.body.paidByParticipantId,
    participantIds: request.body.participantIds,
  };

  try {
    expenses.push(newExpense);
    response.status(201).json(newExpense);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
});

// Expected request body:
// {
//   title: "Dinner",
//   amount: 60,
//   paidByParticipantId: 1,
//   participantIds: [1, 2, 3]
// }
// Expected response: the created expense with a unique id
//
// Hints:
// - validate that all fields are present
// - validate that amount is a positive number
// - validate that participantIds is a non-empty array
// - push the new expense into the expenses array
// - respond with status 201 and the created expense

module.exports = router;
