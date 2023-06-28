// build your `Task` model here
const db = require("../../data/dbConfig");

function find() {
  return db("tasks as ts")
    .join("projects as pj", "ts.project_id", "pj.project_id")
    .select("ts.*", "pj.project_name", "pj.project_description");
}

function getDescription(task_description) {
  return db("tasks").where("task_description", task_description.trim()).first();
}

function addTask(task_description, task) {
  return db("tasks")
    .insert({ ...task })
    .then(() => {
      return getDescription(task_description);
    });
}

module.exports = {
  find,
  getDescription,
  addTask,
};
