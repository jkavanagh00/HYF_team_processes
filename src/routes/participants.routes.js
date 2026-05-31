const express = require("express");
const router = express.Router();
const participants = require("../data/participants");

const validateAddParticipant = (request, response) => {
  const { name } = request.body;
  if (!name) {
    return response.status(400).json({ error: "Participant name is required" });
  }
};

router.get("/", (req, res) => {
  // TODO: return all participants
});

router.post("/", validateAddParticipant, async (request, response) => {
  try {
    const participant = await Participant.create(request.body);
    response.status(201).json(participant);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
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
