// build your `/api/tasks` router here
const express = require("express");

const md = require("./middleware");

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

router.post(
  "/tasks",

  (req, res, next) => {
    const task = req.body;
    const { task_description } = req.body;

    Tasks.addTask(task_description, task)
      .then((newTask) => {
        const something = {
          ...newTask,
          task_completed: Boolean(newTask.task_completed),
        };
        res.status(201).json(something);
      })
      .catch(next);
  }
);

module.exports = router;
