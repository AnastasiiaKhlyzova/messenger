import express from "express";
import path from "path";

const __dirname = path.resolve();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "dist")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.get("/sign-in", (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.get("/sign-up", (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.get("/messenger", (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.get("/settings", (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.get("/500", (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.get("/404", (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
