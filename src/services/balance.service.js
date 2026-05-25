const participants = require("../data/participants");
const expenses = require("../data/expenses");

function calculateBalances() {
  // TODO: implement balance calculation
  //
  // Expected logic:
  // 1. For each expense, the payer gets credited the full amount
  // 2. Each participant listed in participantIds owes an equal share
  // 3. Return an array of { participantId, name, balance } objects
  //    - positive balance = this person is owed money
  //    - negative balance = this person owes money
  //
  // Hint: start with a map of participantId -> balance (all zeros),
  // then loop through expenses and update balances.

  return [];
}

module.exports = { calculateBalances };
