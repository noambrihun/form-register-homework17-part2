const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.post("/signup", (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (!username || !email || !password || !confirmPassword) {
    return res.json({ ok: false, error: "All fields are required!" });
  }

  if (username.length < 4 || username.length > 8) {
    return res.json({ ok: false, error: "Username must be 4–8 characters." });
  }

  if (!email.includes("@")) {
    return res.json({ ok: false, error: "Invalid email." });
  }

  if (password.length < 5 || password.length > 10 || !password.includes("$")) {
    return res.json({ ok: false, error: "Password must be 5–10 chars and include $." });
  }

  if (password !== confirmPassword) {
    return res.json({ ok: false, error: "Passwords do not match." });
  }

  res.json({ ok: true, username });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "signup.html"));
});


app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}/`);
});
