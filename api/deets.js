const express = require("express");
const router = express.Router();
const OurDeets = require("../models/DeetsModel");

router.post("/signup", (request, response) => {
  const assignedDeets = new OurDeets({
    username: request.body.username,
    email: request.body.email,
    password: request.body.password,
  });

  assignedDeets
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

module.exports = router;
