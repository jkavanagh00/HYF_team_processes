const express = require("express");
const router = express.Router();
const participants = require("../data/participants");

router.get("/", (req, res) => {
  // TODO: return all participants
  res.status(200).json({
    status: "success",
    data: participants,
  });
});

router.post("/", (req, res) => {
  // TODO: implement participant creation
  //
  // Expected request body: { name: "Alice" }
  // Expected response: the created participant with a unique id
  //
  // Hints:
  // - validate that name is present in req.body
  // - generate a simple id (e.g. Date.now() or participants.length + 1)
  // - push the new participant into the participants array
  // - respond with status 201 and the created participant
});

module.exports = router;
