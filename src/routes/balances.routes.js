const express = require("express");
const router = express.Router();
const { calculateBalances } = require("../services/balance.service");

router.get("/", (req, res) => {
  // TODO: call calculateBalances() and return the result
});

module.exports = router;
