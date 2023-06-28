// build your `/api/resources` router here
const express = require("express");

const md = require("./middleware");

const Resources = require("./model");

const router = express.Router();

router.get("/resources", (req, res, next) => {
  Resources.find()
    .then((resources) => {
      res.json(resources);
    })
    .catch(next);
});

router.post("/resources", md.checkResourceNameUnique, (req, res, next) => {
  const resource = req.body;
  const { resource_name } = req.body;

  Resources.addResource(resource_name, resource)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch(next);
});

module.exports = router;
