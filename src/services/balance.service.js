const participants = require("../data/participants");
const expenses = require("../data/expenses");

function calculateBalances() {
  const balances = {};
  // Initialize all balances to zero
  participants.forEach(participant => {
    balances[participant.id] = 0;
  });

  // For each expense, credit payer and debit participants
  expenses.forEach(expense => {
    // Credit the payer
    balances[expense.participantId] += expense.amount;
    // Each participant in participantIds owes an equal share
    const share = expense.amount / expense.participantIds.length;
    expense.participantIds.forEach(pid => {
      balances[pid] -= share;
    });
  });

  // Build the result array
  return participants.map(participant => ({
    participantId: participant.id,
    name: participant.name,
    balance: balances[participant.id]
  }));
}

module.exports = { calculateBalances };
