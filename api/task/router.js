// build your `/api/tasks` router here
const express = require("express");

const Tasks = require("./model");

const router = express.Router();

router.get("/tasks", (req, res, next) => {
  Tasks.find()
    .then((tasks) => {
      const something = tasks.map((proj) => ({
        ...proj,
        task_completed: Boolean(proj.task_completed),
      }));
      res.json(something);
    })
    .catch(next);
});

module.exports = router;
