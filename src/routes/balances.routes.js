const express = require("express");
const router = express.Router();
const { calculateBalances } = require("../services/balance.service");

router.get("/", (req, res) => {
  const balances = calculateBalances();
  res.status(200).json(balances);
});

module.exports = router;
