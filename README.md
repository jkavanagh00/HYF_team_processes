# Shared Expense Splitter API

## What is this?

This is a workshop starter project for an **Agile/Scrum backend session**.

Friends travel together and want to track shared expenses. Who paid for what? Who owes whom money? This API will help answer those questions.

The project is intentionally simple. Your goal is not to build production software — your goal is to practice working as a team: planning, splitting work, reviewing each other's code, and shipping features together.

---

## Requirements

- [Node.js](https://nodejs.org/) v18 or higher

---

## Installation

```bash
npm install
```

---

## Running locally

**Development mode** (auto-restarts on file changes):

```bash
npm run dev
```

**Production mode:**

```bash
npm start
```

The server runs at `http://localhost:3000`.

---

## Testing the server

```bash
curl http://localhost:3000/health
```

Expected response:

```json
{ "status": "ok" }
```

---

## Project structure

```
src/
  server.js               → starts the HTTP server
  app.js                  → Express app setup, routes, middleware

  routes/
    participants.routes.js  → GET /participants, POST /participants
    expenses.routes.js      → GET /expenses, POST /expenses
    balances.routes.js      → GET /balances

  services/
    balance.service.js      → balance calculation logic

  middleware/
    error.middleware.js     → global error handler
    not-found.middleware.js → 404 handler

  data/
    participants.js         → in-memory participants array
    expenses.js             → in-memory expenses array

examples/
  participants.http         → example HTTP requests for participants
  expenses.http             → example HTTP requests for expenses
```

---

## Workshop rules

These rules simulate a real team environment. Follow them during the session.

- **Create a branch for each task** — never work directly on `main`
- **Keep pull requests small** — one feature or fix per PR
- **Request at least one review** — your pair or another team member
- **Do not self-merge** — wait for approval before merging
- **Move tasks on the board** when you start, finish, or block a task
- **Communicate blockers early** — do not sit stuck in silence

---

## What you will implement

The starter code runs, but most endpoints are not implemented. Your team will implement:

| Feature | File | Description |
|---|---|---|
| `GET /participants` | `participants.routes.js` | Return all participants |
| `POST /participants` | `participants.routes.js` | Create a new participant |
| `GET /expenses` | `expenses.routes.js` | Return all expenses |
| `POST /expenses` | `expenses.routes.js` | Create a new expense |
| `GET /balances` | `balances.routes.js` | Return calculated balances |
| Balance logic | `balance.service.js` | Who owes whom and how much |
| Input validation | routes files | Return 400 for invalid input |
| Better error messages | middleware + routes | Descriptive error responses |

Look for `// TODO` comments in the code — that is where you need to add your implementation.

---

## Data models

**Participant**

```json
{
  "id": 1,
  "name": "Alice"
}
```

**Expense**

```json
{
  "id": 1,
  "title": "Dinner",
  "amount": 60,
  "paidByParticipantId": 1,
  "participantIds": [1, 2, 3]
}
```

**Balance**

```json
{
  "participantId": 1,
  "name": "Alice",
  "balance": 40
}
```

A positive balance means this person is owed money. A negative balance means this person owes money.
