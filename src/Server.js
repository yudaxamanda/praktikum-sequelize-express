// src/server.js
const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => res.json({ status: "ok , Berhasil" }));

app.listen(4000, () => console.log("API running on http://localhost:4000"));