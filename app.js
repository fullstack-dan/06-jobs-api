require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

// database
const connectDB = require("./db/connect");

// routers
const authRouter = require("./routes/auth");
const projectsRouter = require("./routes/projects");

// custom middleware
const authenticateUser = require("./middleware/authentication");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());
// extra packages

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/projects", authenticateUser, projectsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`),
    );
  } catch (error) {
    console.log(error);
  }
};

start();

// TEST TOKEN:
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTg1YTliZmVjM2EwMjI4NmFjYmY3YTkiLCJuYW1lIjoiZGFuaWVsIiwiaWF0IjoxNzAzMjU4NTYwLCJleHAiOjE3MDU4NTA1NjB9.kDlbEDqrqbk13KZ9s3MpLD35JAOXINgITeJIXUlRDC0"
