const express = require("express");
const router = express.Router();
const expenses = require("../data/expenses");

const validateAddExpense = (request, response) => {
  const { title, amount, paidByParticipantId, participantIds } = request.body;
  if (!title || typeof title !== "string") {
    return response
      .status(400)   
      .json({ error: "Expense name is required and must be a string" });
  }
};


router.get("/", (req, res) => {
  // TODO: return all expenses
});

router.post("/", (request, response) => {
try { 
    const exp = await Expense.create(request.body);
    response.status(201).json(expense);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }  //
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
});

module.exports = router;
