const express = require("express");
const cors = require("cors");
require("dotenv").config();

const recaptchaRoute = require("./src/routes/reCaptcha");

const port = process.env.PORT || 5001;

const app = express();

app.use(
  cors({
    origin: ["https://dtr-invoice.web.app", "http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PATCH", "OPTIONS"],
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "Server is running",
  });
});

app.use("/captcha", recaptchaRoute);

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
