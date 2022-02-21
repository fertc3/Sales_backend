const { json } = require("express");
const express = require("express");
const router = express.Router();

const userService = require("./userService");

router.get("/", async (req, res) => {
  const msg = `Test GET all`;
  console.log(msg);
  try {
    const users = await userService.getAll();
    res.send(users);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.send(err);
  }
});

router.get("/:id", async (req, res) => {
  const userId = req.params.id;
  const msg = `Test GET single user ${userId}`;
  console.log(msg);
  const resultado = /[1-9]{1,8}/.test(userId);
  if (resultado) {
    try {
      const users = await userService.getById(userId);
      res.send(users);
    } catch (err) {
      res.status(500);
      res.send(err);
    }
  } else {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Error,invalid path");
  }
});

router.post("/", async (req, res) => {
  const msg = `Test POST`;
  console.log(msg);
  const body = req.body;

  try {
    const users = await userService.add(body);
    const showData = await userService.getAll();
    res.send(showData);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
});

router.put("/:id", async (req, res) => {
  const msg = `Test PUT`;
  console.log(msg);
  const userId = req.params.id;
  const resultado = /[1-9]{1,8}/.test(userId);
  if (userId.length > 0 && resultado) {
    const body = req.body;

    try {
      const users = await userService.update(userId, body);
      const showData = await userService.getAll();
      res.send(showData);
    } catch (err) {
      res.status(500);
      res.send(err);
      console.log(err);
    }
  } else {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Error, invalid path");
  }
});

router.delete("/:id", async (req, res) => {
  const msg = `Test DELETE`;
  console.log(msg);
  const userId = req.params.id;
  const resultado = /[1-9]{1,8}/.test(userId);
  if (resultado) {
    try {
      const users = await userService.del(userId);
      const showData = await userService.getAll();
      res.send(showData);
    } catch (err) {
      res.status(500);
      res.send(err);
    }
  } else {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Error, invalid path");
  }
});

module.exports = router;
