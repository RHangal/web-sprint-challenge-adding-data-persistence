// build your `/api/projects` router here
const express = require("express");

const Projects = require("./model");

const router = express.Router();

router.get("/projects", (req, res, next) => {
  Projects.find()
    .then((projects) => {
      const something = projects.map((proj) => ({
        ...proj,
        project_completed: Boolean(proj.project_completed),
      }));
      res.json(something);
    })
    .catch(next);
});

module.exports = router;
