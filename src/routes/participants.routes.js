const express = require("express");
const router = express.Router();
const participants = require("../data/participants");

const validateAddParticipant = (request, response, next) => {
  const { name } = request.body;
  if (!name || typeof name !== "string") {
    return response
      .status(400)
      .json({ error: "Participant name is required and must be a string" });
  }
  next();
};

router.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    data: participants,
  });
});

router.post("/", validateAddParticipant, async (request, response) => {
  const newParticipant = {
    id: Date.now(),
    name: request.body.name,
  };

  try {
    participants.push(newParticipant);
    response.status(201).json(newParticipant);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
});

//
// Expected request body: { name: "Alice" }
// Expected response: the created participant with a unique id
//
// Hints:
// - validate that name is present in req.body
// - generate a simple id (e.g. Date.now() or participants.length + 1)
// - push the new participant into the participants array
// - respond with status 201 and the created participant

module.exports = router;
