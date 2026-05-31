const participants = [
  { id: "p1", name: "Alice" },
  { id: "p2", name: "Ela" },
  { id: "p3", name: "Juliana" },
];

function addParticipant(name) {
  if (!name || typeof name !== "string") {
    throw new Error("Participant name is required and must be a string");
  }

  const maxId = participants.reduce((max, participant) => {
    if (typeof participant.id === "string") {
      const matched = participant.id.match(/^p(\d+)$/);
      if (matched) {
        return Math.max(max, Number(matched[1]));
      }
    }

    if (typeof participant.id === "number") {
      return Math.max(max, participant.id);
    }

    return max;
  }, 0);

  const newParticipant = {
    id: `p${maxId + 1}`,
    name: name.trim(),
  };

  participants.push(newParticipant);
  return newParticipant;
}

module.exports = participants;
module.exports.addParticipant = addParticipant;
