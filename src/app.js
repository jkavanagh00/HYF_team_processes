const express = require("express");
const participantsRouter = require("./routes/participants.routes");
const expensesRouter = require("./routes/expenses.routes");
const balancesRouter = require("./routes/balances.routes");
const errorHandler = require("./middleware/error.middleware");
const notFound = require("./middleware/not-found.middleware");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/participants", participantsRouter);
app.use("/expenses", expensesRouter);
app.use("/balances", balancesRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
