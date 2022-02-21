require("./loadenv");
const express = require("express");
const app = express();
const userRouter = require("./userRouter");

const port = process.env.APP_PORT;

app.use(express.json());
app.use("/users", userRouter);

app.listen(process.env.APP_PORT, () => {
  console.log(`Listening on port ${port}`);
});
