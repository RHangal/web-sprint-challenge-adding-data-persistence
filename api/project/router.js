// build your `/api/projects` router here
const express = require("express");

const md = require("./middleware");

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

router.post("/projects", md.validateProjectName, (req, res, next) => {
  const project = req.body;
  const { project_name } = req.body;

  Projects.addProject(project_name, project)
    .then((newProject) => {
      const something = {
        ...newProject,
        project_completed: Boolean(newProject.project_completed),
      };
      res.status(201).json(something);
    })
    .catch(next);
});

module.exports = router;
