const app = require("./app");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});
