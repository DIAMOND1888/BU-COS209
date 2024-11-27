const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, "public")));

//route for login page
app.get("/", (req, res) => {
    res.send(`
    <html>
      <head>
        <title>Login Page</title>
      </head>
      <body>
        <h1>Login</h1>
        <form action="/welcome" method="POST">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required>
          <br>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required>
          <br>
          <button type="submit">Login</button>
        </form>
      </body>
    </html>
  `);
});

//route for handling login form submission
app.post("/welcome", (req, res) => {
    const { username } = req.body;
    res.send(`
    <html>
      <head>
        <title>Welcome</title>
      </head>
      <body>
        <h1>Welcome, ${username}!</h1>
        <a href="/">Go back to Login</a>
      </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});